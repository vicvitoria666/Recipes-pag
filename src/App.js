import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
const GlobalStyle = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style:none;
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
