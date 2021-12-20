import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    let [ counter, setCounter ] = useState( value );



    const handleAdd = (e) => {
        setCounter( counter + 1 );
    }

    const handleSubstract = (e) => {
        setCounter( counter - 1);
    }

    const handleReset = (e) => {
        setCounter( value );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <div className="flex">
                <button className='glow-on-hover' onClick={ handleAdd }>+1</button>
                <button className='glow-on-hover' onClick={ handleReset }>reset</button>
                <button className='glow-on-hover' onClick={ handleSubstract }>-1</button>
            </div>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 1
};

export default CounterApp;