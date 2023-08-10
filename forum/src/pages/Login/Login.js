import './style.css';
import React from "react"
// import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Login(){
    return(
        <>
          <header>

</header>

<main>
    <div class="ContainerCadastro">
        <div class="cardCadastro">
            <div class="esquerda">
                <h1>Bem-vindo  de volta! </h1>
                <h3>Acesse a sua conta  agora mesmo</h3>
            </div>

            <div class="direita">
            
                <img src="LogoSpeakOut.png"/>


                <h3>Login</h3>

            <div class="textfield">
                <input type="text" name="text" placeholder="E-mail"/>
            </div>

            <div class="textfield">
                <input type="text" name="text" placeholder="Senha"/>
            </div>

            <button class="botao">Entrar</button>
            <h4>Não tem uma conta? Cadastre-se já!</h4>
            </div>
        </div>
    </div>
</main>

<footer>

</footer>        
        </>
    );
}

export default Login