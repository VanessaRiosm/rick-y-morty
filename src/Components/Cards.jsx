import React, {useState, useEffect} from 'react'
import Card from './Card'
import style from '../Styles/Cards.module.css'
import {connect} from 'react-redux'
import {deleteChar, numPag} from '../Redux/action'

function Cards({characters, deleteChar, numPag, pages}) {
  // estado del arreglo de paginado (o sea guarda los numeros del paginado que se van a mostrar)
  const [arreglo, setArreglo] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  // funcion que sirve para llenar el array con el numero exacto de paginas para el paginado
  function getPagination() {
    let arreglo = []
    for (let i = 1; i <= Number(pages); i++) {
      arreglo.push(i)
    }
    // aqui seteo el estado con lo que tiene el arreglo que rellene
    setArreglo(arreglo)
  }

  useEffect(() => {
    getPagination()
  }, [pages])

  //setear currentPage a 1 al hacer algun filtro o busqueda para que seleccione la pagina uno siempre

  return (
    <div>
      <div className={style.principal}>
        {
          //aqui hacer condicional para saber si recibe error de que no encontro resultados cuando busca

          characters &&
            characters.map((c) => (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                species={c.species}
                gender={c.gender}
                image={c.image}
                status={c.status}
                origin={c.origin.name}
                onClose={() => deleteChar(c.id)}
              />
            ))
        }
      </div>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          margin: '20px 0px',
        }}
      >
        {/*Boton Prev*/}
        <button
          onClick={() => {
            numPag(currentPage - 1)
            setCurrentPage(currentPage - 1)
          }}
          disabled={currentPage === 1}
          style={
            currentPage === 1
              ? {
                  backgroundColor: 'black',
                  color: 'gray',
                  cursor: 'not-allowed',
                }
              : {color: 'white'}
          }
        >
          Prev
        </button>

        {/* aqui hago map del arreglo para que me muestre los botones de la paginacion */}
        {arreglo.map((num) => {
          return (
            <button
              key={num + 'd'}
              onClick={() => {
                numPag(num)
                setCurrentPage(num)
              }}
              style={
                currentPage === num
                  ? {
                      backgroundColor: 'green',
                      width: '30px',
                      height: '30px',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '50%',
                    }
                  : {
                      backgroundColor: 'black',
                      width: '30px',
                      height: '30px',
                      color: 'white',
                      borderRadius: '50%',
                      border: '1px solid white',
                    }
              }
            >
              {num}
            </button>
          )
        })}

        {/* boton para el Next */}
        <button
          onClick={() => {
            numPag(currentPage + 1)
            setCurrentPage(currentPage + 1)
          }}
          disabled={currentPage === pages}
          style={
            currentPage === pages
              ? {
                  backgroundColor: 'black',
                  color: 'gray',
                  cursor: 'not-allowed',
                }
              : {color: 'white'}
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    pages: state.pages,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteChar: (id) => dispatch(deleteChar(id)),
    numPag: (num) => dispatch(numPag(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
