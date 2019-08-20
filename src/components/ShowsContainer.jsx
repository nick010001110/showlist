
import {connect} from "react-redux"
import Trending from './Trending'
import { setShowsAC } from '../reducers/rootReducer';
import { setCurrentPageAC } from '../reducers/rootReducer';
import { setPageCountAC } from '../reducers/rootReducer';

let mapStateToProps = (state) =>{
    return{
        shows: state.shows,
        pageCount: state.pageCount,
        pageLimit: state.pageLimit,
        currentPage: state.currentPage,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setShows: (shows)=>{
           dispatch(setShowsAC(shows));
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page));
        },
        setPageCount:(pageCount)=>{
            dispatch(setPageCountAC(pageCount));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending)