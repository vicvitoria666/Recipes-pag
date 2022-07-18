import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display:flex;
  background-color:#fff;
`
  
export const Figure = styled.figure`
  width:100%;
`
export const Img = styled.img`
  width:100%;
`
export const Figcaption = styled.figcaption`
    width:100%;
    min-height:389px;
    padding:136px 0 154px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
  export const Content = styled.div`
    min-height:82px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
export const RecipeName = styled.h3`
  color: #373737;
  font-size:40px;
  font-weight:500;
`
export const Line = styled.hr`
    width:49.650%;
    border:2.5px solid #373737;
    background-color:#373737;
`
export const P = styled.p`
    width:576px;
    color: #373737;
    font-size:20px;
    font-weight:400;
`