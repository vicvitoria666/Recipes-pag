import React from "react";
import * as S from "./styles"

export default function Card({Image,ImageDescription, Name}){
    return(
        <S.Container>
            <figure>
            <S.Img src={Image} alt={ImageDescription}/>
            </figure>
            
            <S.Figcaption>
                <S.Content>
                    <S.Line/>
                    <S.RecipeName>{Name}</S.RecipeName>
                </S.Content>
            </S.Figcaption>
        </S.Container>
    )
}