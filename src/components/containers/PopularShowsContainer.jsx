
import {connect} from "react-redux"


import Popular from './Popular'

import {setShowsAC_P, setGenresAC_P, setLanguagesAC_P, setCurrentPageAC_P, setCurrentLanguagesAC_P, setCurrentGenresAC_P, setPageCountAC_P, setQueryAC_P, setYearsAC_P, setCountriesAC_P, setСurrentCountriesAC_P} from '../../reducers/popular';


let mapStateToProps = (state) =>{
    let  {popular} = state;
    return{
        shows: popular.shows,
        genres: popular.genres,
        languages: popular.languages,
        pageCount: popular.pageCount,
        pageLimit: popular.pageLimit,
        currentPage: popular.currentPage,
        currentGenres: popular.currentGenres,
        currentLanguages: popular.currentLanguages,
        countries:popular.countries,
        currentCountries: popular.currentCountries,
        query: popular.query,
        years: popular.years,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setShows: (shows)=>{
           dispatch(setShowsAC_P(shows));
        },
        setGenres: (genres)=>{
           dispatch(setGenresAC_P(genres));
        },
        setLanguages: (languages)=>{
           dispatch(setLanguagesAC_P(languages));
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC_P(page));
        },
        setCurrentLanguages:(languages)=>{
            dispatch(setCurrentLanguagesAC_P(languages));
        },
        setCurrentGenres:(genres)=>{
            dispatch(setCurrentGenresAC_P(genres));
        },
        setPageCount:(pageCount)=>{
            dispatch(setPageCountAC_P(pageCount));
        },


        setQuery:(query)=>{
            dispatch(setQueryAC_P(query));
        },
        setYears:(years)=>{
            dispatch(setYearsAC_P(years));
        },


        
        setCountries:(countries)=>{
            dispatch(setCountriesAC_P(countries));
        },
        setСurrentCountries:(currentCountries)=>{
            dispatch(setСurrentCountriesAC_P(currentCountries));
        },



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Popular)