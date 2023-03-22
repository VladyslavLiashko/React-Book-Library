import React from "react";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { RecomendedBooks } from "../RecomendedBooks/RecomendedBooks";
import { FreeBooks } from "../FreeBooks/FreeBooks";

export const Main = () =>{
    return(
        <div className="main">
            <SearchBooks/>
            <RecomendedBooks/>
            <FreeBooks/>
        </div>
    )
}