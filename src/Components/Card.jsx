import React, {useState, useEffect} from 'react';
import style from '../Styles/Card.module.css'
import { Link } from 'react-router-dom';
import { myFavorites, removeFavorite } from '../Redux/action.js'
import {connect} from 'react-redux'

function Card(props) {
  // acá va tu código

  const [isFav, setIsFav] = useState(false);

  
  
  function handleFavorite(){
    
    if(isFav){
      props.removeFavorite(props.id)
      setIsFav(false);
    }else{
      props.myFavorites(props)
      setIsFav(true)
    }
  }
  
  useEffect(() => {
    props.favorites.map((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.favorites]);

  return (

    <div className={style.divPrincipal}>
    
        <div className={style.btn}>
          {
            isFav ? (
                <button onClick={handleFavorite}>💚</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
        }
        </div> 


      <Link to={`/character/${props.id}`} className={style.link}> 
        <img src={props.image} className={style.img} alt="imagen del personaje"/>
        <h4 className={style.texto}>{props.name}</h4>
        <div className={style.divNombre}>
          <p className={style.pDeLista}>
          
          <ul className={style.lista}>
            <li className={style.li}>
            {props.gender} 
            </li>
            <li className={style.li}>
            {props.origin}
            </li>
           </ul>
           </p>
        </div>
      </Link>
        
    </div>
  )
}


function mapStateToProps(state){
 
  return{
    favorites: state.myFavorites
  }
}

function mapDispatchToProps(dispatch){
  return{
    myFavorites: (personaje) => dispatch(myFavorites(personaje)),
    removeFavorite: (id) => dispatch(removeFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)