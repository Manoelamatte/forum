import React from "react"
import { ContainerGeral } from "../../StyledGlobal"
import { CardCadastro,  Direita, Esquerda, H1, H3, Textfield, Input, Botao } from "./styled"


function Cadastro(){
  return(
    <>
    <ContainerGeral>
        <CardCadastro>
          <Esquerda>
            <H1>Oi, Barbie</H1>
            
          </Esquerda>

          <Direita>
            <H3>Cadastre-se</H3>
            <Textfield>
              <Input type="text" name="nome" placeholder="Nome"></Input>
              <Input type="tel" name="telefone" placeholder="Telefone"></Input>
              <Input type="text" name="email" placeholder="Email"></Input>
              <Input type="password" name="senha" placeholder="Senha"></Input>

              <Botao>Entrar</Botao>
            </Textfield>
          </Direita>
        </CardCadastro>
    </ContainerGeral>
    </>
  )
}

export default Cadastro