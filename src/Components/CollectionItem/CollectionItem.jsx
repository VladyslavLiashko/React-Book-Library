import React from "react";

import "./CollectionItem.css";

export const CollectionItem = (props) =>{
    return(
        <div className="CollectionItem">
            <img src={props.data.img} alt="" />
            <div className="collection-item-info">
                <h1>{props.data.title}</h1>
                <h2>{props.data.authors}</h2>
                <p>{props.data.amount} UAH</p>
                <a href={props.data.link}><button>View More</button></a>
            </div>
        </div>
    )
}