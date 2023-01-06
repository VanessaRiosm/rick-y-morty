import { ADD_CHAR, DELETE_CHAR, FILTER, NUM_PAG, GET_CHAR, GET_CHARACTERS, MY_FAVORITES, REMOVE_FAVORITE  } from "./actionTypes";

export const getCharacters = () => {

    return function (dispatch){
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
                .then((data) =>  dispatch({type: GET_CHARACTERS, payload: {data: data.results, pages: data.info.pages}}))
    
        .catch(error => console.log(error));
    }
}


export const getChar = (id) => {

    return function (dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
                .then((data) => dispatch({type: GET_CHAR, payload: data}))

        .catch((error) => console.log(error));
    }

}

export const numPag = (numPagina) => {

  return function (dispatch){

    fetch(`https://rickandmortyapi.com/api/character?page=${numPagina}`)
      .then((res) => res.json())
        .then((data) => dispatch({type: NUM_PAG, payload: data.results}))

    .catch((error) => console.log(error));
  }
}


export const addChar = (character) => {

    return function (dispatch){

    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
      .then(response => response.json())
        .then(characterInfo => dispatch({

          type: ADD_CHAR, 
          payload: characterInfo.error ? characterInfo : characterInfo.results
        
        }))
        .catch(e=>console.log(e))
    }
}



export const deleteChar = (id) => {
  return{
    type: DELETE_CHAR,
    payload: id
  }
}




export const filter = (specie, status) => {

  return function (dispatch){

    fetch(`https://rickandmortyapi.com/api/character/?species=${specie}&status=${status}`)
      .then(response => response.json())
        .then(filtroInfo => dispatch({type: FILTER, payload: {data: filtroInfo.results, pages: filtroInfo.info.pages}}))
        .catch(e=>console.log(e))
    }

}

export const myFavorites = (personaje) => {

  return{
    type: MY_FAVORITES,
    payload: personaje
  }

}

export const removeFavorite = (id) => {

  return{
    type: REMOVE_FAVORITE,
    payload: id 
  }

}