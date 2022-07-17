import React from "react";
import * as S from "./styles"
import Card from "../Recipes Cards/Index";
import CardAbout1 from "../Card about/index";
import SignUp from "../SignUp";
import RecipeImg1 from "../../assets/images/foodiesfeed_detail-of-pavlova-strawberry-piece-of-cake.png"
import RecipeImg2 from "../../assets/images/foodiesfeed_neapolitan-pizza-margherita.png"
import RecipeImg3 from "../../assets/images/foodiesfeed_peanut-butter-and-banana-smoothie.png"
import RecipeAbautImg from "../../assets/images/pexels-karolina-grabowska.png"


export default function Main (){
    const RecipesList = [
        {recipeImg:RecipeImg1,recipeName:"Red Velvet Cake"},
        {recipeImg:RecipeImg2,recipeName:"Margherita Pizza"},
        {recipeImg:RecipeImg3,recipeName:"Peanut Smoothie"}
    ]

    return(
        <>
        <S.Container>
            <S.Section padding={"245px 0 294px 0"} >
            <S.Content>
                <S.SectionTitle>Latest Recipes</S.SectionTitle>
                <S.Line/>
            </S.Content>
                <S.Ul>
                {RecipesList.map(item =>(
                    <li>
                        <Card
                        Image={item.recipeImg}
                        ImageDescription={`imagem do prato da receita de ${item.recipeName}`}
                        Name={item.recipeName}
                        />
                    </li>
                ))}
                </S.Ul>
            </S.Section>  
            <S.Section>

                <CardAbout1
                Image={RecipeAbautImg}
                ImgDescription={"sobre"}
                Name={"Abault"}
                Children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam."}
                />

            </S.Section>
            <S.Section padding={"167px 0 211px 0"}>
                <SignUp/>
            </S.Section>
            
        </S.Container>
        </>
    )
}