import React, {useEffect} from 'react';
import Cards from './Components/Cards';
import Nav from './Components/Nav'
import Species from './Components/Filters/Species.jsx';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './Components/CardDetail';
import { connect } from 'react-redux';
import {getCharacters} from './Redux/action'
import Favorites from './Components/Favorites';


function App({getCharacters}) {


 useEffect(() => {
  getCharacters()

}, []);

  return (
    <div className="App">

      <Routes>

        <Route path={"/"} element={
          <div>
            <Nav />
            <Species />
            <Cards /> 

        </div>
        }/>
        <Route path="/character/:id" element ={<CardDetail />}/>
        <Route path="/favorites" element ={<Favorites />}/>
      </Routes>
       
  </div>
  )};

  
  function mapDispatchToProps(dispatch){
    return{
      getCharacters: () => dispatch(getCharacters())
    }
  }


export default connect(null, mapDispatchToProps)(App)
