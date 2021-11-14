import React, { useState, useEffect } from 'react'

import './Counter.css'

const Counter = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log('renderizou')
    }, [contador]) 

    const handleOnClick = operador => {
        const novoValor = operador === '+' 
        ? contador + 1 
        : contador - 1
        setContador(novoValor)
    }

    return (
        <>            
            <div className="counter">
                <span>{contador}</span>
                <button onClick={() => handleOnClick('-')}>-</button>
                <button onClick={() => handleOnClick('+')}>+</button>
            </div>
        </>
        
    )
}

export default Counter