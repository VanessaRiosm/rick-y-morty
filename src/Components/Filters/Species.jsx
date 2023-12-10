import React, {useState} from 'react'
import style from '../../Styles/Species.module.css'
import {connect} from 'react-redux'
import {filter} from '../../Redux/action'
import {Link} from 'react-router-dom'

function Species(props) {
  const species = [
    'Human',
    'Alien',
    'Animal',
    'Poopybutthole',
    'Humanoid',
    'Mythological Creature',
  ]
  const [filtro, setFiltro] = useState('')

  return (
    <div>
      <div className={style.filters}>
        <button
          onClick={() => {
            props.filter('', '')
            setFiltro('All Characters')
          }}
          className={style.filterBtn}
        >
          {' '}
          <big> All Characters </big>{' '}
        </button>

        {species.map((s) => (
          <button
            key={s}
            onClick={() => {
              props.filter(s, '')
              setFiltro(s)
            }}
            style={
              filtro === s
                ? {backgroundColor: 'green', color: 'white'}
                : {color: 'White'}
            }
            value={s}
            className={style.filterBtn}
          >
            {' '}
            <big> {s} </big>{' '}
          </button>
        ))}
      </div>

      <div className={style.favoritesDiv}>
        <button className={style.favoritesBtn}>
          {' '}
          <Link to={'/favorites'} className={style.favoritesText}>
            {' '}
            <big>💚 My Favorites </big>{' '}
          </Link>{' '}
        </button>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    filter: (filtro, a) => dispatch(filter(filtro, a)),
  }
}

export default connect(null, mapDispatchToProps)(Species)
