import React from "react";
import "./ModalBook.css";

export const ModalBook = ({ active, setActive, item, title, authors, desc, amount, buyLink }) => {

    // let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

    // if (item.imageLinks != undefined) {
    //     let imgLink = item.imageLinks && item.imageLinks.smallThumbnail;
    //     console.log(item)
    return (
        <div className={active ? "modal-book" : "modal-book-hidden"} onClick={() => setActive(false)}>
            <div className="modal-book-wrapper" onClick={e => e.stopPropagation()}>
                <div className="modal-book-img">
                    <div className="modal-book-img-wrapper">
                        <img src={item} alt="" />
                    </div>
                </div>
                <div className="modal-book-text">
                    <div className="modal-box-text-wrapper">
                        <h1>{title}</h1>
                        <div className="line"></div>
                        <h2>{authors}</h2>
                        <h3>{desc}</h3>
                        <p>{amount} UAH</p>
                        <button> <a href={buyLink}>View More -- </a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// }