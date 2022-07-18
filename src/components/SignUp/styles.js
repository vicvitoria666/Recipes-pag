import styled from 'styled-components';

export const Form = styled.form`
  height:386px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  
`
export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`
export const Title = styled.h3`
  text-align:center;
  font-size:40px;
  font-weight:500;
`
export const P = styled.p`
  font-size:32px;
  font-weight:400;
`
export const Input = styled.input`
  width:792px;
  height:120px;
  border:none;
  background-color: #EFF1EE;
  &::placeholder{
    padding:0 0 0 50px;
    color:#707070;
    font-size:24px;
    font-weight:400;
}
`
export const Button = styled.button`
  width:240px;
  height:81px;
  border:6px #373737 solid;
  color: #373737;
  background-color:none;
  font-size:24px;
  font-weight:500;
`
