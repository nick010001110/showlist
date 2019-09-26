
import {connect} from "react-redux"
import Trending from './Trending'
import { setShowsAC_T,setGenresAC_T,setLanguagesAC_T,setCurrentPageAC_T,setCurrentLanguagesAC_T, setCurrentGenresAC_T, setPageCountAC_T, setQueryAC_T ,setYearsAC_T, setCountriesAC_T, setСurrentCountriesAC_T} from '../../reducers/trending';


let mapStateToProps = (state) =>{
   let  {trending} = state;
    return{
            shows: trending.shows,
            genres: trending.genres,
            languages: trending.languages,
            pageCount: trending.pageCount,
            pageLimit: trending.pageLimit,
            currentPage: trending.currentPage,
            currentGenres: trending.currentGenres,
            currentLanguages: trending.currentLanguages,
            countries:trending.countries,
            currentCountries: trending.currentCountries,
            query: trending.query,
            years: trending.years,
        
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setShows: (shows)=>{
           dispatch(setShowsAC_T(shows));
        },
        setGenres: (genres)=>{
           dispatch(setGenresAC_T(genres));
        },
        setLanguages: (languages)=>{
           dispatch(setLanguagesAC_T(languages));
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC_T(page));
        },
        setCurrentLanguages:(languages)=>{
            dispatch(setCurrentLanguagesAC_T(languages));
        },
        setCurrentGenres:(genres)=>{
            dispatch(setCurrentGenresAC_T(genres));
        },
        setPageCount:(pageCount)=>{
            dispatch(setPageCountAC_T(pageCount));
        },


        setQuery:(query)=>{
            dispatch(setQueryAC_T(query));
        },
        setYears:(years)=>{
            dispatch(setYearsAC_T(years));
        },


        
        setCountries:(countries)=>{
            dispatch(setCountriesAC_T(countries));
        },
        setСurrentCountries:(currentCountries)=>{
            dispatch(setСurrentCountriesAC_T(currentCountries));
        },



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending)