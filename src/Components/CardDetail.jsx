import React, {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import style from '../Styles/CardDetail.module.css'
import {connect} from 'react-redux'
import {getChar} from '../Redux/action'

function CardDetail({char, getChar}) {
  const {id} = useParams()
  const navigate = useNavigate()

  function backToHome() {
    navigate(-1)
  }

  useEffect(() => {
    getChar(id)
  }, [id])

  return (
    <div className={style.principal}>
      <div>
        <button onClick={() => backToHome()} className={style.btn}>
          BACK
        </button>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={style.details}>
          <img
            src={char.image}
            className={style.img}
            alt='imagen del personaje'
          />

          <div style={{backgroundColor: 'transparent', marginTop: '210px'}}>
            <p className={style.title}>{char.name}</p>
            <p> Specie: {char.species}</p>
            <p> Status: {char.status}</p>
            <p>Gender: {char.gender}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    char: state.char,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getChar: (id) => dispatch(getChar(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)
