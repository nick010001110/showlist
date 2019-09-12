import React from 'react' 
import {Component} from 'react'
import * as axios from 'axios'
import styles from  '../Trending.css'
import Table from './Table'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; 
import Select from './Select';


class Trending extends Component{ 
    
async componentDidMount(){
    
    
 try {
    const response =  await axios({
        url: `https://api.trakt.tv/shows/trending?page=${this.props.currentPage}&limit=${this.props.pageLimit}&genres=${this.props.currentGenres}&languages=${this.props.currentLanguages}&query=${this.props.query}&years=${this.props.years}&countries=${this.props.currentCountries}`, // get current shows page with current limit
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     
    let imgs = response.data ;

    for(const row of imgs){
        const response = await axios({
              url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
              method: 'get',
             
           })
        try {
              row.show.ids.tvdb =response.data.tvposter[0].url;  
            } catch (error) {}
         
          };
         this.props.setShows(imgs);
        this.props.setPageCount(response.headers['x-pagination-page-count']);
     

     axios({
        url: `https://api.trakt.tv/genres/shows`, // get all genres for shows from API
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
        this.props.setGenres(response.data); 
     }) 

     axios({
        url: `https://api.trakt.tv/languages/shows`, // get all languages for shows from API
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
        this.props.setLanguages(response.data);
     }) 

     axios({
        url: `https://api.trakt.tv/countries/shows`, // get all countries for shows from API
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
        this.props.setCountries(response.data);
     }) 

    
    
 } catch (error) {
     
 }
     
    }

onPageChanged=(pageNumber)=>{
        
        this.props.setCurrentPage(pageNumber);
        
        async function pageChange(props){
        const response = await axios({
            url: `https://api.trakt.tv/shows/trending?page=${pageNumber}&limit=${props.pageLimit}&genres=${props.currentGenres}&languages=${props.currentLanguages}&query=${props.query}&years=${props.years}&countries=${props.currentCountries}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-version': 2,
                'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
            }
         })
         
        let imgs = response.data ;
        for(const row of imgs){
            try {
                const response = await axios({
                      url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                      method: 'get',   
                });
                 row.show.ids.tvdb = response.data.tvposter[0].url;
                } catch (error) {}
            };
        props.setShows(imgs);
        }

        try {
            pageChange(this.props);
        } catch (error) {  
        }
        

    }



onLangComboboxChange=(value)=>{
        let res =[];
        let languages = this.props.languages;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(languages.find(lang=>lang.name==element));
        });
        myres.forEach(function(element) {
            res.push(element.code);
        });

        

        async function pageChange(props){
            const response = await axios({
                url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${props.pageLimit}&genres=${props.currentGenres}&languages=${res.join()}&query=${props.query}&years=${props.years}&countries=${props.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-version': 2,
                    'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.show.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
            props.setShows(imgs);
            }
            try {
                pageChange(this.props);
            } catch (error) {  
            }
            



            this.props.setCurrentPage(1);

            this.props.setCurrentLanguages(res.join());
            
    

      
        


    }

onGenreComboboxChange=(value)=>{
        let res =[];
        let genres = this.props.genres;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(genres.find(lang=>lang.name==element));
        });
        myres.forEach(function(element) {
            res.push(element.slug);
        });

        

        async function pageChange(props){
            const response = await axios({
                url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${props.pageLimit}&genres=${res.join()}&languages=${props.currentLanguages}&query=${props.query}&years=${props.years}&countries=${props.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-version': 2,
                    'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.show.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
            props.setShows(imgs);
            }
            try {
                pageChange(this.props);
            } catch (error) {  
            }
            

            this.props.setCurrentPage(1);

            this.props.setCurrentGenres(res.join());
         
    


        
        
         
    }
 
onCountriesComboboxChange=(value)=>{
        let res =[];
        let countries = this.props.countries;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(countries.find(coun=>coun.name==element));
        });
        myres.forEach(function(element) {
            res.push(element.code);
        });




        async function pageChange(props){
            const response = await axios({
                url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${props.pageLimit}&genres=${props.currentGenres}&languages=${props.currentLanguages}&query=${props.query}&years=${props.years}&countries=${res.join()}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-version': 2,
                    'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.show.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
            props.setShows(imgs);
            }
            try {
                pageChange(this.props);
            } catch (error) {  
            }
            


        this.props.setCurrentPage(1);

        this.props.setСurrentCountries(res.join());
        
        
          


    }
    

handleChangeQuery=(e)=>{
        this.props.setQuery(e.target.value);

        async function pageChange(props){
            const response = await axios({
                url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${props.pageLimit}&genres=${props.currentGenres}&languages=${props.currentLanguages}&query=${e.target.value}&years=${props.years}&countries=${props.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-version': 2,
                    'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.show.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
            props.setShows(imgs);
            }
            try {
                pageChange(this.props);
            } catch (error) {  
            }
            


        this.props.setCurrentPage(1);



    }

handleChangeYears=(e)=>{
        this.props.setYears(e.target.value);

        async function pageChange(props){
            const response = await axios({
                url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${props.pageLimit}&genres=${props.currentGenres}&languages=${props.currentLanguages}&query=${props.query}&years=${e.target.value}&countries=${props.currentCountries}`,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-version': 2,
                    'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
                }
             })
             
            let imgs = response.data ;
            for(const row of imgs){
                try {
                    const response = await axios({
                          url: `http://webservice.fanart.tv/v3/tv/${row.show.ids.tvdb}?api_key=1296f15c399158e5046966fa404c88ff`,
                          method: 'get',   
                    });
                     row.show.ids.tvdb = response.data.tvposter[0].url;
                    } catch (error) {}
                };
            props.setShows(imgs);
            }
            try {
                pageChange(this.props);
            } catch (error) {  
            }


        this.props.setCurrentPage(1);


    }

render(){
    const{ genres,languages,shows,countries} = this.props;
    return( 
        <div className="container"> 
            <h4 className ="center"> Trending</h4>
            <label > Search titles and descriptions
                 <input type="text" onChange={this.handleChangeQuery}/>
            </label>
            <label > Search 4 digit year or range of years
                 <input type="text" onChange={this.handleChangeYears}/>
            </label>
            <Select items={languages} title="Language" onChange={this.onLangComboboxChange}  />
            <Select items={genres}  title="Genres" onChange={this.onGenreComboboxChange} />
            <Select items={countries}  title="Countries" onChange={this.onCountriesComboboxChange} />
            <Table shows={shows} page ={this.props.currentPage} limit ={this.props.pageLimit}/>
            <Pagination
                currentPage={this.props.currentPage}
                totalPages={this.props.pageCount}
                changeCurrentPage={this.onPageChanged}
                theme="bottom-border"
                />
            
           
        </div> 
    ) 
    }
}

export default Trending;