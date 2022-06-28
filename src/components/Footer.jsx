import React from "react";
import Nav from "./Nav";
import Imagem1 from "../assets/images/Instagram Ellipse.svg"
import Imagem2 from "../assets/images/Twitter ellipse.svg"
import Imagem3 from "../assets/images/Facebook Ellipse.svg"
import Imagem4 from "../assets/images/Pinterest Ellipse.svg"


export default function Footer (){
    return(
        <>
        <footer>
            <ul>
                <li> <img src={Imagem1} alt={"ícone do instagram"} /> </li>
                <li> <img src={Imagem2} alt={"ícone do instagram"} /> </li>
                <li> <img src={Imagem3} alt={"ícone do instagram"} /> </li>
                <li> <img src={Imagem4} alt={"ícone do instagram"} /> </li>
            </ul>
            <Nav/>
        </footer>
        </>
    )
}