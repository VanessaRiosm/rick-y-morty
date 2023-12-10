import React, {useState} from 'react'
import styles from '../Styles/SearchBar.module.css'
import {connect} from 'react-redux'
import {addChar} from '../Redux/action'

function SearchBar({addChar}) {
  const [findCharacter, setFindCharacter] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (!findCharacter) alert('ingresa un nombre')
        else if (findCharacter[0] !== ' ') {
          addChar(findCharacter)
        } else alert('caracteres invalidos')

        setFindCharacter('')
      }}
    >
      <main>
        <div className={styles.SearchBox}>
          <input
            type='text'
            className={styles.input}
            placeholder='Buscar Personaje...'
            value={findCharacter}
            onChange={(event) => {
              setFindCharacter(event.target.value)
              addChar(event.target.value)
            }}
          />
          <button type='submit'>
            <i
              className='material-icons'
              style={{color: 'white', marginBottom: '-15px'}}
            >
              search
            </i>
          </button>
        </div>
      </main>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addChar: (findChar) => dispatch(addChar(findChar)),
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
