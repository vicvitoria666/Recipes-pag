import React from "react";

export default function Nav (){
    const ListButtons =[
        "ABOUT",
        "RECIPES",
        "SUBSCRIBE"
    ]

    return(
        <>
        <nav>
            {ListButtons.map(item =>(
                <button>{item}</button>
            ))}
            
        </nav>
        </>
    )
}