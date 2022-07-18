import styled from 'styled-components';
export const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:#F2F4F1;

`
export const Section = styled.section`
    width:100%;
    padding:${({padding})=>padding};
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Content = styled.div`
    height:82px;
    margin:0 0 105px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
export const SectionTitle = styled.h2`
    font-size:40px;
    font-weight:400;
`
export const Line = styled.hr`
    width:20.902%;
    border:2.5px solid #373737;
    background-color:#373737;
`
export const CardAbout = styled.div`
    width:100%;
`

export const Ul = styled.main`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    justify-content:space-evenly
`