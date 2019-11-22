import React, {useState, useEffect} from 'react' 
import * as axios from 'axios'
import Table from '../presentational/TableP'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; 
import Select from '../presentational/Select';




const Popular = (props) => {

    

    let [shows, setShows] = useState(props.shows);
    let [genres, setGenres] = useState(props.genres);
    let [languages, setLanguages] = useState(props.languages);
    let [countries, setCountries] = useState(props.countries);

    let [currentGenres, setCurrentGenres] = useState(props.currentGenres);
    let [currentLanguages, setCurrentLanguages] = useState(props.currentLanguages);
    let [currentCountries, setСurrentCountries] = useState(props.currentCountries);


    let [pageLimit, setPageLimit] = useState(props.pageLimit);
    let [pageCount, setPageCount] = useState(props.pageCount);
    let [currentPage, setCurrentPage] = useState(props.currentPage);


    let [query, setQuery] = useState(props.query);
    let [years, setYears] = useState(props.years);

    
    useEffect ( () =>{
       
        let data = props;
        async function didMount (){
            
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${data.currentPage}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${data.currentLanguages}&query=${data.query}&years=${data.years}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);



            const genres = await axios ({
                    url: `https://api.trakt.tv/genres/shows`, // get all genres for shows from API
                    method: 'get',
                    headers: {
                        'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                        'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                        'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                    }
                 })
                 data.setGenres(genres.data); 
            
                    const languages = await axios ({
                    url: `https://api.trakt.tv/languages/shows`, // get all languages for shows from API
                    method: 'get',
                    headers: {
                        'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                        'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                        'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                    }
                 })
                 
                 data.setLanguages(languages.data);
                 
            
                    const countries = await axios({
                    url: `https://api.trakt.tv/countries/shows`, // get all countries for shows from API
                    method: 'get',
                    headers: {
                        'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                        'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                        'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                    }
                 })
                 
                 data.setCountries(countries.data);



            
        }
        didMount();
// eslint-disable-next-line react-hooks/exhaustive-deps
        console.log(currentGenres, currentLanguages, currentCountries,pageLimit, pageCount, currentPage, query,years);

// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );


    useEffect ( () =>{
        setShows(props.shows);
        setGenres(props.genres);
        setCountries(props.countries);
        setLanguages(props.languages);
        setCurrentGenres(props.currentGenres);
        setCurrentLanguages(props.currentLanguages);
        setСurrentCountries(props.currentCountries);
        setPageLimit(props.pageLimit);
        setPageCount(props.pageCount);
        setCurrentPage(props.currentPage);
        setQuery(props.query);
        setYears(props.years);

       
    }, [props] );


    useEffect(() => {
        return () => {
            props.setCurrentGenres('');
            props.setCurrentLanguages('');
            props.setСurrentCountries('');
            props.setQuery('');
            props.setYears('');
            props.setCurrentPage(1);
            props.setShows([]);   
            props.setPageCount(0); 
            
            
        
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const onPageChanged=(pageNumber)=>{
        
        props.setCurrentPage(pageNumber);
        let data= props;
        async function changePage (pageNumber){
            
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${pageNumber}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${data.currentLanguages}&query=${data.query}&years=${data.years}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);

            
        }
        changePage(pageNumber);
    }


    const onLangComboboxChange=(value)=>{
        let res =[];
        let languages = props.languages;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(languages.find(lang=>lang.name===element));
        });
        myres.forEach(function(element) {
            res.push(element.code);
        });

        let data= props;
            
        async function pageChange(data){
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${1}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${res.join()}&query=${data.query}&years=${data.years}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);
            }
            try {
                pageChange(data);
            } catch (error) {  
            }
            






        props.setCurrentPage(1);
        props.setCurrentLanguages(res.join());

    }

    const onGenreComboboxChange=(value)=>{
        let res =[];
        let genres = props.genres;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(genres.find(lang=>lang.name===element));
        });
        myres.forEach(function(element) {
            res.push(element.slug);
        });
        let data= props;
        async function pageChange(data){
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${1}&limit=${data.pageLimit}&genres=${res.join()}&languages=${data.currentLanguages}&query=${data.query}&years=${data.years}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);
            }
            try {
                pageChange(data);
            } catch (error) {  
            }
       
        props.setCurrentGenres(res.join());
        props.setCurrentPage(1);

    }

    const onCountriesComboboxChange=(value)=>{
        let res =[];
        let countries = props.countries;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(countries.find(coun=>coun.name===element));
        });
        myres.forEach(function(element) {
            res.push(element.code);
        });

        let data= props;
        async function pageChange(data){
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${1}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${data.currentLanguages}&query=${data.query}&years=${data.years}&countries=${res.join()}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
             let imgs = response.data ;
             for(const row of imgs){
                 try {
                     const response = await axios({
                           url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                           method: 'get',   
                     });
                      row.ids.tvdb = response.data.tvposter[0].url;
                     } catch (error) {}
                 };
                 data.setShows(imgs);
                 data.setPageCount(response.headers['x-pagination-page-count']);
             }
            try {
                pageChange(data);
            } catch (error) {  
            }
            

        props.setCurrentPage(1);
        props.setСurrentCountries(res.join());
    }

    const handleChangeQuery=(e)=>{
        props.setQuery(e.target.value);
        let data= props;
        async function pageChange(data){
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${1}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${data.currentLanguages}&query=${e.target.value}&years=${data.years}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);
            }
            try {
                pageChange(data);
            } catch (error) {  
            }


        props.setCurrentPage(1);
    }

    const handleChangeYears=(e)=>{
        props.setYears(e.target.value);
        let data=props;
        async function pageChange(data){
            const response = await axios({
                url: `https://api.trakt.tv/shows/popular?page=${1}&limit=${data.pageLimit}&genres=${data.currentGenres}&languages=${data.currentLanguages}&query=${data.query}&years=${e.target.value}&countries=${data.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': process.env.REACT_APP_CONTENT_TYPE,
                    'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION,
                    'trakt-api-key': process.env.REACT_APP_TRAKT_API_KEY,
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
                data.setShows(imgs);
                data.setPageCount(response.headers['x-pagination-page-count']);
            }
            try {
                pageChange(data);
            } catch (error) {  
            }



        props.setCurrentPage(1);
    }



    return( 
        <div className="container"> 
            <h4 className ="center"> Popular</h4>
            <label > Search titles and descriptions
                 <input type="text" onChange={handleChangeQuery}/>  
            </label>
            <label > Search 4 digit year or range of years
                 <input type="text" onChange={handleChangeYears}/>
            </label>
            <Select items={languages} title="Language" onChange={onLangComboboxChange}  />
            <Select items={genres}  title="Genres" onChange={onGenreComboboxChange} />
            <Select items={countries}  title="Countries" onChange={onCountriesComboboxChange} />
            <Table shows={shows} page ={props.currentPage} limit ={props.pageLimit}/>
            <Pagination
                currentPage={props.currentPage}
                totalPages={props.pageCount}
                changeCurrentPage={onPageChanged}
                theme="bottom-border"
                />
            
           
        </div> 
    ) 
    
}
export  default Popular;