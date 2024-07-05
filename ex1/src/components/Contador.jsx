import React, { useState } from 'react';
import '../App.css';

function Contador() {
    const [valor, setValor] = useState(0);

    const IncrementarValor = () => {
        setValor(valor + 1);
    };

    return (
        <div className="container">
            <p>{valor}</p>
            <button onClick={IncrementarValor}>Incrementar</button>
        </div>
    );
}

export default Contador;
