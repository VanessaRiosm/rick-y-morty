import React from 'react';
import { deleteChar } from '../Redux/action';
import {connect} from 'react-redux'
import Card from './Card';
import Nav from './Nav'
import Species from './Filters/Species';


function Favorites(props){

 return(
    <div>
    <div>
      <Nav/>
      <Species/>
    </div>

        {props.myFavorites.map(c => (

          <Card 
              key={c.id}
              id={c.id}
              name={c.name}
              species={c.species}
              gender={c.gender}
              image={c.image}
              onClose={() => props.deleteChar(c.id)}
          />

        ))}

    </div>
 )
}

function mapStateToProps(state){
 
    return{
      myFavorites: state.myFavorites
    }
  }

function mapDispatchToProps(dispatch){
    return{
      deleteChar: (id) => dispatch(deleteChar(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)