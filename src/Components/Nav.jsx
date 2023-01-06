import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from '../Styles/Cards.module.css'
import styleNav from '../Styles/Nav.module.css'


function Nav() {
  return (
    <div className={styleNav.principal}>

    <img src='https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png' className={style.img}></img>
    
    <SearchBar/>
    
    </div>
  );
};

export default Nav;