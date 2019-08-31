const SET_SHOWS= 'SET_SHOWS'
const SET_GENRES= 'SET_GENRES'
const SET_LANGUAGES= 'SET_LANGUAGES'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_CURRENT_GENRES='SET_CURRENT_GENRES'
const SET_CURRENT_LANGUAGES='SET_CURRENT_LANGUAGES'
const SET_PAGE_COUNT='SET_PAGE_COUNT'



const SET_QUERY='SET_QUERY'
const SET_YEARS='SET_YEARS'

const SET_COUNTRIES='SET_COUNTRIES'
const SET_CURRENT_COUNTRIES='SET_CURRENT_COUNTRIES'






const initState ={
    shows: [],
    genres: [],
    languages: [],
    pageLimit: 10,
    pageCount: 0,
    currentPage: 1,
    currentGenres: '',
    currentLanguages: '',

    currentCountries: '',
    countries:[],


    query: '',
    years: '',
}

const rootReducer = (state = initState, action)=>{


    switch( action.type){
        case SET_SHOWS:{
            return {...state, shows: action.shows}
        }
        case SET_GENRES:{
            return {...state, genres: action.genres}
        }
        case SET_LANGUAGES:{
            return {...state, languages: action.languages}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage }
        }
        case SET_CURRENT_GENRES:{
            return {...state, currentGenres: action.currentGenres }
        }
        case SET_CURRENT_LANGUAGES:{
            return {...state, currentLanguages: action.currentLanguages }
        }
        case SET_PAGE_COUNT:{
            return {...state, pageCount: action.pageCount }
        }




        case SET_QUERY:{
            return {...state, query: action.query }
        }
        case SET_YEARS:{
            return {...state, years: action.years }
        }


        case SET_COUNTRIES:{
            return {...state, countries: action.countries }
        }
        case SET_CURRENT_COUNTRIES:{
            return {...state, currentCountries: action.currentCountries }
        }



        default:
           return state;
       }
    
}
export const setShowsAC = (shows) => ({type: SET_SHOWS, shows})
export const setGenresAC = (genres) => ({type: SET_GENRES, genres})
export const setLanguagesAC = (languages) => ({type: SET_LANGUAGES, languages})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setCurrentLanguagesAC = (currentLanguages) => ({type: SET_CURRENT_LANGUAGES, currentLanguages})
export const setCurrentGenresAC = (currentGenres) => ({type: SET_CURRENT_GENRES, currentGenres})
export const setPageCountAC = (pageCount) => ({type: SET_PAGE_COUNT, pageCount})



export const setQueryAC = (query) => ({type: SET_QUERY, query})
export const setYearsAC = (years) => ({type: SET_YEARS, years})


export const setCountriesAC = (countries) => ({type: SET_COUNTRIES, countries})
export const setСurrentCountriesAC = (currentCountries) => ({type: SET_CURRENT_COUNTRIES, currentCountries})

export default rootReducer