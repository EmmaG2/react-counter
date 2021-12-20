import React from 'react';
import PropTypes from "prop-types";

const PageApp = ({ saludo, subtitulo }) => {

    //! Leer
    //* Es muy obligatorio el parametro "saludo" para usar el component
    //? En caso de no usarlo, el parametro por defecto será 'hola mundo'

    return (
      <div className='div-container'>
        <h1>{ saludo }</h1>
        <p>{ subtitulo }</p>
      </div>
    );
}

PageApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PageApp.defaultProps = {
  saludo: 'soy un saludo',
  subtitulo: 'Soy un sub'
}

export default PageApp;