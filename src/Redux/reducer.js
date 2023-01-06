import { ADD_CHAR, DELETE_CHAR, FILTER, GET_CHAR, GET_CHARACTERS, MY_FAVORITES, NUM_PAG, REMOVE_FAVORITE } from "./actionTypes"

const initialState = {
        characters: [],
        char: {},
        myFavorites: [],
        pages: 0
    }

    
export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case GET_CHARACTERS:
            return{
                ...state,
                characters: payload.data,
                pages: payload.pages
            }

            case NUM_PAG:

                return{
                    ...state,
                    characters: payload,
                }


        case GET_CHAR:
            return{
                ...state,
                char: payload
            }

        case ADD_CHAR: 

            return{
                ...state,
                characters: payload
            }

        case DELETE_CHAR: 
            return{
                ...state,
                characters: state.characters.filter(c => c.id !== payload),
                myFavorites: state.myFavorites.filter(c => c.id !== payload),
            }

        case FILTER:


            return {
                ...state,
                characters: payload.data,
                pages: payload.pages
            }


        case MY_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        
        case REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((c) => c.id !== payload)
            }


        default:
            return{
                ...state
            }
    }
}