import React, {useState, useEffect} from 'react';
import './styles.css';

function Produtos(){

    let destaque = (event) => {
        if (event.target.style.width === "260px") {
            event.target.style.width = "120px";
        }
        else {
            event.target.style.width = "260px";
            event.target.style.height = "260px"
        }
    }

    let redimensiona = (event) => {
        if (event.target.style.width === "120px") {
            event.target.style.width = "260px";
        }
        else {
            event.target.style.width = "120px";
            event.target.style.height = "120px"
        }
    }

    return(
        <>
            <div class="row col-xs-6 col-sm-6 col-md-6 col-lg-12" align="center">
                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Cadeira de Rodas</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Bengala</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Aparelho auditivo</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Andador</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Bengala para cego</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Cinta ergonomica</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="produtos" id="geladeira">
                        <img src="./imagens/logo.jpg" alt="Logo" width="120" height="120" onMouseOver={destaque} onMouseOut={redimensiona}/>
                        <p>Pegador</p>
                        <div>
                            <p class="preco_ant">R$ 6.389,00</p>
                            <p class="preco_final">R$ 5.019,00</p>
                        </div>
                    </div>
                </div>

                

                


            </div>


        </>
    )

}


export default Produtos;