
import {connect} from "react-redux"
import Trending from './Trending'
import { setShowsAC } from '../reducers/rootReducer';
import { setGenresAC } from '../reducers/rootReducer';
import { setLanguagesAC } from '../reducers/rootReducer';
import { setCurrentPageAC } from '../reducers/rootReducer';
import { setCurrentLanguagesAC } from '../reducers/rootReducer';
import { setCurrentGenresAC } from '../reducers/rootReducer';
import { setPageCountAC } from '../reducers/rootReducer';

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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending)