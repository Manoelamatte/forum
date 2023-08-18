import style from "./style.css";

function Cadastro(){
    return(
        <>
          <header>

</header>

<main>
    <div class="ContainerCadastro">
        <div class="cardCadastro">
            <div class="esquerda">
                
            </div>

            <div class="direita">
                <h1>Cadastro</h1>

            <div class="textfield">
                <input type="text" name="email" placeholder="email"/>
            </div>

            <div class="textfield">
                <input type="password" name="senha" placeholder="senha"/>
            </div>

            <div class="textfield">
                <input type="password" name="confirmar senha" placeholder="senha"/>
            </div>
            <button class="botao">Login</button>
            </div>
        </div>
    </div>
</main>

<footer>

</footer>   
        </>
    )
}

export default Cadastro