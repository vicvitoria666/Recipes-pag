import React from 'react';
import * as S from './styles'

const CardAbout = ({Image,ImgDescription, Name, Children}) => {
  return(
    <>
    <S.Container>
        <S.Figure>
        <S.Img src={Image} alt={ImgDescription}/>
        </S.Figure>
            
        <S.Figcaption>
            <S.Content>
                <S.RecipeName>{Name}</S.RecipeName>
                <S.Line/>
            </S.Content>
            <S.P>{Children}</S.P>
        </S.Figcaption>

    </S.Container>
    </>
  );
}
export default CardAbout;