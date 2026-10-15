import React from "react";
import { useNavigate } from 'react-router-dom';

const estiloBotao = {
    padding: '10px 20px',
    fontSize: '10px',
    cursor: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#007bff',
    color: '#ffffff'
}

export default function BotaoNavegaçâo({rota, texto}){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(rota)} style={estiloBotao}>
            { texto }
        </button>
    );

}