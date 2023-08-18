import styled from "styled-components"

export const CardLogin = styled.div`
  width: 70vw;
  height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

// direita
export const Direita = styled.div`
  width: 35vw;
  height: 80vh;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const H4 = styled.h4`
  color: #f448A0;
  padding: 2%;
  padding-left: 47%;
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
  padding-left: 15%;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 05%;
  letter-spacing: 1px;
`

export const H3 = styled.h3`
    color: white;
    padding: 10%;
    padding-left: 15%;
    font-family: Arial, Helvetica, sans-serif;
`

// input 
export const Textfield = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 80px;
    row-gap:17px;
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
    margin-left: 170px;
    border: none;
    border-radius: 10px;
    letter-spacing: 3px;
    background-color: #f448A0;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`

export const Paragrafo = styled.p`
   color: #f448A0;
   margin-left: 170px;
`