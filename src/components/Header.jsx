import React from "react";
import Styled from "styled-components"
import Nav from "./Nav";
import RC from "../assets/RC.svg"
import BackgroundHeader from "../assets/pexels-rachel-claire-4846295.png"

const Header= header.styled`
background-image: url(`${BackgroundHeader}`),
`

export default function Header() {
    return(
        <>
        <Header>
        <img src={RC}/>
        <h1>RECIPES</h1>
        <Nav/>
        </Header>
        </>
    )
}