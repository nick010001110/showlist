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
    trending:{
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
    },
    popular:{
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
}

const rootReducer = (state = initState, action)=>{


    switch( action.type){
        case SET_SHOWS_T:{
            return {...state,
                trending:{
                    ...state.trending,shows: action.shows}}
        }
        case SET_GENRES_T:{
            return {...state,
                trending:{
                    ...state.trending, genres: action.genres}}
        }
        case SET_LANGUAGES_T:{
            return {...state,
                trending:{
                    ...state.trending, languages: action.languages}}
        }
        case SET_CURRENT_PAGE_T:{
            return {...state, 
                trending:{
                    ...state.trending,currentPage: action.currentPage }}
        }
        case SET_CURRENT_GENRES_T:{
            return {...state,
                trending:{
                    ...state.trending, currentGenres: action.currentGenres }}
        }
        case SET_CURRENT_LANGUAGES_T:{
            return {...state,
                trending:{
                    ...state.trending, currentLanguages: action.currentLanguages }}
        }
        case SET_PAGE_COUNT_T:{
            return {...state,
                trending:{
                    ...state.trending, pageCount: action.pageCount }}
        }
        case SET_QUERY_T:{
            return {...state,
                trending:{
                    ...state.trending, query: action.query }}
        }
        case SET_YEARS_T:{
            return {...state,
                trending:{
                    ...state.trending, years: action.years }}
        }
        case SET_COUNTRIES_T:{
            return {...state,
                trending:{
                    ...state.trending, countries: action.countries }}
        }
        case SET_CURRENT_COUNTRIES_T:{
            return {...state,
                trending:{
                    ...state.trending, currentCountries: action.currentCountries }}
        }






        case SET_SHOWS_P:{
            return {...state,
                popular:{
                    ...state.popular,shows: action.shows}}
        }
        case SET_GENRES_P:{
            return {...state,
                popular:{
                    ...state.popular, genres: action.genres}}
        }
        case SET_LANGUAGES_P:{
            return {...state,
                popular:{
                    ...state.popular, languages: action.languages}}
        }
        case SET_CURRENT_PAGE_P:{
            return {...state, 
                popular:{
                    ...state.popular,currentPage: action.currentPage }}
        }
        case SET_CURRENT_GENRES_P:{
            return {...state,
                popular:{
                    ...state.popular, currentGenres: action.currentGenres }}
        }
        case SET_CURRENT_LANGUAGES_P:{
            return {...state,
                popular:{
                    ...state.popular, currentLanguages: action.currentLanguages }}
        }
        case SET_PAGE_COUNT_P:{
            return {...state,
                popular:{
                    ...state.popular, pageCount: action.pageCount }}
        }
        case SET_QUERY_P:{
            return {...state,
                popular:{
                    ...state.popular, query: action.query }}
        }
        case SET_YEARS_P:{
            return {...state,
                popular:{
                    ...state.popular, years: action.years }}
        }
        case SET_COUNTRIES_P:{
            return {...state,
                popular:{
                    ...state.popular, countries: action.countries }}
        }
        case SET_CURRENT_COUNTRIES_P:{
            return {...state,
                popular:{
                    ...state.popular, currentCountries: action.currentCountries }}
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

export default rootReducer