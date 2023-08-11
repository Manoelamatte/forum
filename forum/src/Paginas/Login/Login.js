import style from "./style.css";

function Login(){
    return(
        <>
           <header>
          
          </header>
    
          <main>
       
           <div class="main-login">
            <div class="containerGeral">
                <div class="esquerda">
                    <h1>Olá!</h1>
                    <h2>Seja bem vindo de volta.</h2>
    
                    <div class="textfield">
                        <input type="text" name="email" placeholder="email"/>
                    </div>
    
                    <div class="textfield">
                        <input type="password" name="senha" placeholder="senha"/>
                    </div>
    
                    <button class="botao">Login</button>
                </div> 
    
                <div class="direita">
                    
                    <img src="imagemLogin.png" alt="mulher"/>
                </div>
            </div>
           </div>
          </main>
    
          <footer>
    
          </footer>    
        </>
    )
}

export default Login