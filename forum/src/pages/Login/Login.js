import React from "react"
import { Botao, CardLogin, Direita, H1, H3, H4, Input, Paragrafo, Textfield} from './styled';
import { ContainerGeral } from '../../StyledGlobal';
import { Esquerda } from '../Cadastro/styled';
// import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Login(){
    return(
        <>   
    <ContainerGeral>
        <CardLogin>
            <Esquerda>
                <H1>
                    Bem-Vindo
                    de volta!
                </H1>

                <H3>
                    Acesse a sua conta agora mesmo!
                </H3>
            </Esquerda>

            <Direita>   
                <H4>
                    Login
                </H4>

            <Textfield>
                <Input type="text" name="email" placeholder="Email"></Input>
                <Input type="password" name="senha" placeholder="Senha"></Input>
           </Textfield>

                <Botao>
                    Entrar
                </Botao>

                <Paragrafo>
                    Não tem uma conta? 
                </Paragrafo>
            </Direita>
        </CardLogin>
    </ContainerGeral>
        </>
    );
}

export default Login