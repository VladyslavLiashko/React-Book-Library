import React from "react";
import { useSelector } from "react-redux";
import { CollectionItem } from "../CollectionItem/CollectionItem";

import "./Collection.css"

export const Collection = () => {
    const item = useSelector(state => state.add.collection);
    return (
        <div className="collection">
            {item.length > 0 ? <div className='collection-item'> {item.map(pr => <CollectionItem data={pr} />)}</div>
                :
                <div style={{ fontWeight: 700, fontSize: 32, color: "black", textAlign: "center", padding: 100 }}>

                    There is no books in your collection</div>}

        </div>
    )
}