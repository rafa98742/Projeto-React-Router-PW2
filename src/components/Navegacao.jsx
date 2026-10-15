import React from "react";
import BotaoNavegaçâo from "./BotaoNavegação";

export default function Navegacao() {
    return(
        <div style={{display: 'flex', gap: '10px',
            justifyContent: 'center', margin: '20px'
        }}>
          <BotaoNavegaçâo rota="/" texto="Ir para pagina 1"/>
          <BotaoNavegaçâo rota="/pagina-dois" texto="Ir para pagina 2"/>
        </div>
    );
}