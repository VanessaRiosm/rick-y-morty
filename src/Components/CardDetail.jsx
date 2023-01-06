import React, {useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import style from '../Styles/CardDetail.module.css'
import {connect} from 'react-redux'
import {getChar} from '../Redux/action'

function CardDetail ({char, getChar}) {

    const {id} = useParams()
    const navigate = useNavigate();


    function backToHome(){
        navigate(-1)
      }


    useEffect(() => {
      getChar(id)
      }, [id]);


    return(
        <div>
           <div className={style.principal}>

            <div>
                <button onClick={()=>backToHome()} className={style.btn}>BACK</button>
            </div>
                <img src={char.image} className={style.img} alt="imagen del personaje"/>
                <h1 className={style.title}>{char.name}</h1>
            </div>

            <div className={style.info}>
              {char.species}  {char.status}  {char.gender}
               
            </div>
        </div>
    )
}


function mapStateToProps(state){
  return{
    char: state.char
  }
}
function mapDispatchToProps(dispatch){
  return{
    getChar: (id) => dispatch(getChar(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)