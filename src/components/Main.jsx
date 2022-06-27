import React from "react";
import Card from "./Card";
import styled from "styled-components";
import RecipeImg1 from "../assets/foodiesfeed_detail-of-pavlova-strawberry-piece-of-cake.png"
import RecipeImg2 from "../assets/foodiesfeed_neapolitan-pizza-margherita.png"
import RecipeImg3 from "../assets/foodiesfeed_peanut-butter-and-banana-smoothie.png"
import RecipeAbautImg from "../assets/pexels-karolina-grabowska.png"
const MainContainer = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#F2F4F1;

`
const Ul = styled.main`
    display:flex;
`
export default function Main (){
    const RecipesList = [
        {recipeImg:RecipeImg1,recipeName:"Red Velvet Cake"},
        {recipeImg:RecipeImg2,recipeName:"Margherita Pizza"},
        {recipeImg:RecipeImg3,recipeName:"Peanut Smoothie"}
    ]
    return(
        <>
        <MainContainer>
            <section>
                <Ul>
                    {RecipesList.map(item =>(
                        <li>
                            <Card
                            Image={item.recipeImg}
                            ImageDescription={`imagem do prato da receita de ${item.recipeName}`}
                            Name={item.recipeName}
                            />
                        </li>
                    ))}
                </Ul>
            </section>
            <section>
            <Card
            Image={RecipeAbautImg}
            ImageDescription={"sobre"}
            Name={"Abault"}
            Children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam."}
            />
            </section>
            <h2></h2>
            <h3></h3>
            <input/>
            <button>SUBMIT</button>
            <section>

            </section>
            
        </MainContainer>
        </>
    )
}