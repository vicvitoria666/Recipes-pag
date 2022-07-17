import React from "react";
import * as S from './styles'
const SignUp =()=> {
  return (
    <>
    <S.Form onSubmit={e=>e.preventDefault()}>
        <S.Content>
          <S.Title>SUBSCRIBE</S.Title>
          <S.P>Sign up for newsletter</S.P>
        </S.Content>
        <S.Input type="text" placeholder="Your Email"/>
        <S.Button>SUBMIT</S.Button>

    </S.Form>
    </>
  );
}
export default SignUp