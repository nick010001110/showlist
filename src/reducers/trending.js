const SET_SHOWS_T= 'SET_SHOWS_T'
const SET_GENRES_T= 'SET_GENRES_T'
const SET_LANGUAGES_T= 'SET_LANGUAGES_T'
const SET_CURRENT_PAGE_T='SET_CURRENT_PAGE_T'
const SET_CURRENT_GENRES_T='SET_CURRENT_GENRES_T'
const SET_CURRENT_LANGUAGES_T='SET_CURRENT_LANGUAGES_T'
const SET_PAGE_COUNT_T='SET_PAGE_COUNT_T'
const SET_QUERY_T='SET_QUERY_T'
const SET_YEARS_T='SET_YEARS_T'
const SET_COUNTRIES_T='SET_COUNTRIES_T'
const SET_CURRENT_COUNTRIES_T='SET_CURRENT_COUNTRIES_T'



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


const trendingReducer = (state = initState, action)=>{


    switch( action.type){
        case SET_SHOWS_T:{
            return {...state,
                shows: action.shows}
        }
        case SET_GENRES_T:{
            return {...state,
                genres: action.genres}
        }
        case SET_LANGUAGES_T:{
            return {...state,
                languages: action.languages}
        }
        case SET_CURRENT_PAGE_T:{
            return {...state, 
               currentPage: action.currentPage }
        }
        case SET_CURRENT_GENRES_T:{
            return {...state,
                 currentGenres: action.currentGenres }
        }
        case SET_CURRENT_LANGUAGES_T:{
            return {...state,
                 currentLanguages: action.currentLanguages }
        }
        case SET_PAGE_COUNT_T:{
            return {...state,
                 pageCount: action.pageCount }
        }
        case SET_QUERY_T:{
            return {...state,
                 query: action.query }
        }
        case SET_YEARS_T:{
            return {...state,
                 years: action.years }
        }
        case SET_COUNTRIES_T:{
            return {...state,
                countries: action.countries }
        }
        case SET_CURRENT_COUNTRIES_T:{
            return {...state,
                currentCountries: action.currentCountries }
        }
        default:
           return state;
       }
    
}
export const setShowsAC_T = (shows) => ({type: SET_SHOWS_T, shows})
export const setGenresAC_T = (genres) => ({type: SET_GENRES_T, genres})
export const setLanguagesAC_T = (languages) => ({type: SET_LANGUAGES_T, languages})
export const setCurrentPageAC_T = (currentPage) => ({type: SET_CURRENT_PAGE_T, currentPage})
export const setCurrentLanguagesAC_T = (currentLanguages) => ({type: SET_CURRENT_LANGUAGES_T, currentLanguages})
export const setCurrentGenresAC_T = (currentGenres) => ({type: SET_CURRENT_GENRES_T, currentGenres})
export const setPageCountAC_T = (pageCount) => ({type: SET_PAGE_COUNT_T, pageCount})
export const setQueryAC_T = (query) => ({type: SET_QUERY_T, query})
export const setYearsAC_T = (years) => ({type: SET_YEARS_T, years})
export const setCountriesAC_T = (countries) => ({type: SET_COUNTRIES_T, countries})
export const setСurrentCountriesAC_T = (currentCountries) => ({type: SET_CURRENT_COUNTRIES_T, currentCountries})

export default trendingReducer