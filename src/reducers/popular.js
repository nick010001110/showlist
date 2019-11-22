
const SET_SHOWS_P= 'SET_SHOWS_P'
const SET_GENRES_P= 'SET_GENRES_P'
const SET_LANGUAGES_P= 'SET_LANGUAGES_P'
const SET_CURRENT_PAGE_P='SET_CURRENT_PAGE_P'
const SET_CURRENT_GENRES_P='SET_CURRENT_GENRES_P'
const SET_CURRENT_LANGUAGES_P='SET_CURRENT_LANGUAGES_P'
const SET_PAGE_COUNT_P='SET_PAGE_COUNT_P'
const SET_QUERY_P='SET_QUERY_P'
const SET_YEARS_P='SET_YEARS_P'
const SET_COUNTRIES_P='SET_COUNTRIES_P'
const SET_CURRENT_COUNTRIES_P='SET_CURRENT_COUNTRIES_P'





const initState ={
   
    
        shows: [],
        genres: [],
        languages: [],
        countries:[],

        currentGenres: '',
        currentLanguages: '',
        currentCountries: '',
        
        pageLimit: 10,
        pageCount: 0,
        currentPage: 1,
     
       
        query: '',
        years: '',
    
}

const popularReducer = (state = initState, action)=>{


    switch( action.type){
        case SET_SHOWS_P:{
            return {...state,
               shows: action.shows}
        }
        case SET_GENRES_P:{
            return {...state,
                 genres: action.genres}
        }
        case SET_LANGUAGES_P:{
            return {...state,
                languages: action.languages}
        }
        case SET_CURRENT_PAGE_P:{
            return {...state, 
                currentPage: action.currentPage }
        }
        case SET_CURRENT_GENRES_P:{
            return {...state,
                currentGenres: action.currentGenres }
        }
        case SET_CURRENT_LANGUAGES_P:{
            return {...state,
                 currentLanguages: action.currentLanguages }
        }
        case SET_PAGE_COUNT_P:{
            return {...state,
                 pageCount: action.pageCount }
        }
        case SET_QUERY_P:{
            return {...state,
                query: action.query }
        }
        case SET_YEARS_P:{
            return {...state,
                years: action.years }
        }
        case SET_COUNTRIES_P:{
            return {...state,
                countries: action.countries }
        }
        case SET_CURRENT_COUNTRIES_P:{
            return {...state,
                 currentCountries: action.currentCountries }
        }


        default:
           return state;
       }
    
}


export const setShowsAC_P = (shows) => ({type: SET_SHOWS_P, shows})
export const setGenresAC_P = (genres) => ({type: SET_GENRES_P, genres})
export const setLanguagesAC_P = (languages) => ({type: SET_LANGUAGES_P, languages})
export const setCurrentPageAC_P = (currentPage) => ({type: SET_CURRENT_PAGE_P, currentPage})
export const setCurrentLanguagesAC_P = (currentLanguages) => ({type: SET_CURRENT_LANGUAGES_P, currentLanguages})
export const setCurrentGenresAC_P = (currentGenres) => ({type: SET_CURRENT_GENRES_P, currentGenres})
export const setPageCountAC_P = (pageCount) => ({type: SET_PAGE_COUNT_P, pageCount})
export const setQueryAC_P = (query) => ({type: SET_QUERY_P, query})
export const setYearsAC_P = (years) => ({type: SET_YEARS_P, years})
export const setCountriesAC_P = (countries) => ({type: SET_COUNTRIES_P, countries})
export const setСurrentCountriesAC_P = (currentCountries) => ({type: SET_CURRENT_COUNTRIES_P, currentCountries})

export default popularReducer