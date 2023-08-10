import React from "react"
import './style.css';


function Cadastro() {
  return (
    <>
    <header>

</header>

<main>
    <div class="ContainerCadastro">
        <div class="cardCadastro">
            <div class="esquerda">
                <h1>Oi, Barbie</h1>
                {/* <img src="BarbieSpeak.png"/> */}
            </div>

            <div class="direita">
            
                {/* <img src="LogoSpeakOut.png"> */}


                <h3>Cadastre-se</h3>

            <div class="textfield">
                <input type="text" name="text" placeholder="Nome"/>
            </div>

            <div class="textfield">
                <input type="text" name="text" placeholder="Telefone"/>
            </div>

            <div class="textfield">
                <input type="text" name="email" placeholder="Email"/>
            </div>

            <div class="textfield">
                <input type="password" name="senha" placeholder="Senha"/>
            </div>

            <button class="botao">Entrar</button>
            </div>
        </div>
    </div>
</main>

<footer>

</footer>
     
    </>
  );
}

export default Cadastro;
