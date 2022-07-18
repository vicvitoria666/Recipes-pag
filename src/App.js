import React from "react";
import {createGlobalStyle } from "styled-components";
import myFontURL from './assets/fonts/Hurme_Geometric_Sans_No.Font_Family/Hurme Geometric Sans No.1/HurmeGeometricSans1 Black.otf';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Index";
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style:none;
}
@font-face {
    font-family:HurmeGeometricSans1;
    src: url(${myFontURL}) format('');
    font-weight:400;
    font-style:normal;
  }
`



export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
