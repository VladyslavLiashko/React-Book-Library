import React, { useEffect, useState } from "react";
import axios from "axios"
import { BooksCard } from "../BooksCard/BooksCard";
import "./SearchBook.css"

export const SearchBooks = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const API_KEY = "AIzaSyBunjedEpMoDe-PpNSpe3mnUe6tF4iq2Do"


    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + `&key=${API_KEY}` + "&maxResults=20")
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
        else {
            <div>hi,john</div>
        }
    }
    // let booksArr = data.map(book => <BooksCard data={book} />)
    // let MainArr = mainData.map(book => <BooksCard data={book} />)
    return (
        <div className="searchBooks">
            <form action="#">
                <input type="text" placeholder="Search Books...  (If the search did not work the first time, please try again.)" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
            </form>
            <div className="searched-books">
                {/* {booksArr} */}
                <BooksCard book = {data}/>
            </div>
            {/* {!booksArr?<h1>hello</h1>: booksArr} */}
        </div>
    )
}