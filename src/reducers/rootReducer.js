const SET_SHOWS= 'SET_SHOWS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_PAGE_COUNT='SET_PAGE_COUNT'
const initState ={
    shows: [],
    pageLimit: 10,
    pageCount: 0,
    currentPage: 1,
}

const rootReducer = (state = initState, action)=>{


    switch( action.type){
        case SET_SHOWS:{
            return {...state, shows: action.shows}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage }
        }
        case SET_PAGE_COUNT:{
            return {...state, pageCount: action.pageCount }
        }
        default:
           return state;
       }
    
}
export const setShowsAC = (shows) => ({type: SET_SHOWS, shows})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setPageCountAC = (pageCount) => ({type: SET_PAGE_COUNT, pageCount})

export default rootReducer