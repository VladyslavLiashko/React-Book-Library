import React, { useEffect, useState } from "react";
import "./RecomendedBooks.css";
import { BooksCard } from "../BooksCard/BooksCard";
import axios from "axios"

export const RecomendedBooks = () =>{
    const [mainData, setMainData] = useState([])
    const API_KEY = "AIzaSyBunjedEpMoDe-PpNSpe3mnUe6tF4iq2Do"

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=React" + `&key=${API_KEY}` + "&maxResults=9")
            .then(res => setMainData(res.data.items))
            .catch(err => console.log(err))

    }, [])
    return(
        <div className="recomended-books">
                <h1 id="h1">Recomended books</h1>
                <div className="recomended-books-wrapper">
                    {/* {MainArr} */}
                    <BooksCard book={mainData}/>
                </div>
            </div>
    )
}