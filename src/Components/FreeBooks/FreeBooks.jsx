import React, { useState } from "react";
import "./FreeBooks.css";
import img from "../../assets/FreeBooks.png"

export const FreeBooks = () => {
    const [value, setValue] = useState();
    return (
        <div className="freeBooks">
            <div className="free-books-img">
                <img src={img} alt="" />
            </div>
            <div className="free-books-text">
                <div className="free-books-text-wrapper">
                    <h1>Get over a 100 free books</h1>
                    <p>Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the popular book categories...</p>
                    <form action="#">
                        <input type="mail" id="freeBooksText" placeholder="Enter email adress..." value={value} />
                        <input type="button" id="freeBooksButton" value="Get free books" onClick={()=> setValue("")} />
                    </form>
                </div>
            </div>
        </div>
    )
}