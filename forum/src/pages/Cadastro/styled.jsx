import styled from "styled-components"

// export const ContainerCadastro = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

export const CardCadastro = styled.div`
   width: 70vw;
  height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
// direta
export const Direita = styled.div`
  width: 35vw;
  height: 80vh;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
export const H3 = styled.h3`
  color: #f448A0;
  padding: 2%;
  padding-left: 40%;
  font-family: Arial, Helvetica, sans-serif;
`

// esquerda
export const Esquerda = styled.div`
   width: 30vw;
  height: 80vh;
  flex-direction: column;
  background-color: #f448A0;
  border-radius: 10%;
`

export const H1 = styled.h1`
  color: white;
  padding: 10%;
  padding-left: 27%;
  font-family: Arial, Helvetica, sans-serif;
`
// fim

// input 
export const Textfield = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 70px;
    row-gap:07px;
    padding-top: 15px;

`

export const Input = styled.input`
    width: 70%;
    border: none;
    border-radius: 20px;
    padding: 15px;
    background: #ffaac2;
    font-size: 12pt;
    outline: none;
    box-sizing: border-box;
`

export const Botao = styled.button`
    width: 30%;
    padding: 13px;
    margin: 20px;
    margin-left: 90px;
    border: none;
    border-radius: 10px;
    letter-spacing: 3px;
    background-color: #f448A0;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`