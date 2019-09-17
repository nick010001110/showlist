
import {connect} from "react-redux"
import Trending from './Trending'
import Popular from './Popular'
import { setShowsAC,setGenresAC,setLanguagesAC,setCurrentPageAC,setCurrentLanguagesAC, setCurrentGenresAC, setPageCountAC, setQueryAC ,setYearsAC, setCountriesAC, setСurrentCountriesAC} from '../reducers/rootReducer';


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
export default connect(mapStateToProps, mapDispatchToProps)(Popular)