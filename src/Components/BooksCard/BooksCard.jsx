import React, { useState } from "react";
import "./BooksCard.css";
import { ModalBook } from "../ModalBook/ModalBook";

export const BooksCard = ({ book }) => {
    console.log({ book })
    const [active, setActive] = useState(false)
    const [itemImg, setImg] = useState()
    const [title, setTitle] = useState()
    const [authors, setAuthors] = useState()
    const [desc, setDesc] = useState()
    const [amounts, setAmount] = useState()
    const [buyLink, setBuyLink] = useState()
    // const imgLink = "http://covers.openlibrary.org/b/isbn/" + props.data.isbn[0] + "-M.jpg"
    return (
        <>
        {
        book.map((item) => {
            let imgLink = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if (imgLink != undefined && amount != undefined) {
                return (
                    <div className="booksCard" onClick={() => { setActive(!active); setImg(imgLink); setTitle(item.volumeInfo.title);setAuthors(item.volumeInfo.authors); setDesc(item.volumeInfo.description); setAmount(amount); setBuyLink(item.saleInfo.buyLink) }}>
                        <div className="books-card-img">
                            <div className="books-card-img-wrapper">
                                <img src={imgLink} alt="No image" />
                            </div>
                        </div>
                        <div className="books-card-text">
                            <h1>{item.volumeInfo.title}</h1>
                            <h2>{item.volumeInfo.authors}</h2>
                            <p>{amount} UAH</p>
                        </div>
                        <ModalBook active={active} setActive={setActive} item={itemImg} title={title} authors={authors} desc = {desc} amount={amounts} buyLink ={buyLink} />


                    </div>
                )
            }
        })
        }
        </>
    )
    // const imgLink = props.data.volumeInfo.imageLinks && props.data.volumeInfo.imageLinks.smallThumbnail;
    // let amount = props.data.saleInfo.listPrice && props.data.saleInfo.listPrice.amount;

    // if (imgLink != undefined && amount != undefined) {
    //     return (
    //         <div className="booksCard" onClick={()=>{setActive(!active); setItem(props.data)}}>
    //             <div className="books-card-img">
    //                 <div className="books-card-img-wrapper">
    //                     <img src={imgLink} alt="No image" />
    //                 </div>
    //             </div>
    //             <div className="books-card-text">
    //                 <h1>{props.data.volumeInfo.title}</h1>
    //                 <h2>{props.data.volumeInfo.authors}</h2>
    //                 <p>{amount} UAH</p>
    //             </div>
    //             <ModalBook active={active} setActive={setActive} data={item} />


    //         </div>
    //     )
    // }
}