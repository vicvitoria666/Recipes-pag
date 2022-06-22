import React from "react";

export default function Card({Image,ImageDescription, Name, Children}){
    return(
        <>
        <div>
            <figure>
            <img src={Image} alt={ImageDescription}/>
            </figure>
            <aside>
            <h3>{Name}</h3>
            <hr/>
            <p>{Children}</p>
            </aside>
        </div>
        </>
    )
}