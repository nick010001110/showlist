
import {connect} from "react-redux"
import Trending from './Trending'
import { setShowsAC } from '../reducers/rootReducer';
import { setGenresAC } from '../reducers/rootReducer';
import { setLanguagesAC } from '../reducers/rootReducer';
import { setCurrentPageAC } from '../reducers/rootReducer';
import { setCurrentLanguagesAC } from '../reducers/rootReducer';
import { setCurrentGenresAC } from '../reducers/rootReducer';
import { setPageCountAC } from '../reducers/rootReducer';


import { setQueryAC } from '../reducers/rootReducer';
import { setYearsAC } from '../reducers/rootReducer';
import { setCountriesAC } from '../reducers/rootReducer';
import { setСurrentCountriesAC } from '../reducers/rootReducer';

let mapStateToProps = (state) =>{
    return{
        shows: state.shows,
        genres: state.genres,
        languages: state.languages,
        pageCount: state.pageCount,
        pageLimit: state.pageLimit,
        currentPage: state.currentPage,
        currentGenres: state.currentGenres,
        currentLanguages: state.currentLanguages,

        countries:state.countries,
        currentCountries: state.currentCountries,


        
        query: state.query,
        years: state.years,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setShows: (shows)=>{
           dispatch(setShowsAC(shows));
        },
        setGenres: (genres)=>{
           dispatch(setGenresAC(genres));
        },
        setLanguages: (languages)=>{
           dispatch(setLanguagesAC(languages));
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page));
        },
        setCurrentLanguages:(languages)=>{
            dispatch(setCurrentLanguagesAC(languages));
        },
        setCurrentGenres:(genres)=>{
            dispatch(setCurrentGenresAC(genres));
        },
        setPageCount:(pageCount)=>{
            dispatch(setPageCountAC(pageCount));
        },


        setQuery:(query)=>{
            dispatch(setQueryAC(query));
        },
        setYears:(years)=>{
            dispatch(setYearsAC(years));
        },


        
        setCountries:(countries)=>{
            dispatch(setCountriesAC(countries));
        },
        setСurrentCountries:(currentCountries)=>{
            dispatch(setСurrentCountriesAC(currentCountries));
        },



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending)