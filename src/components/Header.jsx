import React from "react";
import Styled from "styled-components"
import Nav from "./Nav";
import RC from "../assets/images/RC.svg"
import BackgroundHeader from "../assets/images/Grupo-de-máscara2.png"

const ContainerHeader= Styled.header`
background-image: url(${BackgroundHeader});
`

export default function Header() {
    return(
        <>
        <ContainerHeader>
        <img src={RC} alt="Logo"/>
        <h1>RECIPES</h1>
        <Nav/>
        </ContainerHeader>
        </>
    )
}
