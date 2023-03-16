import React from "react";
import "./Header.css";

export const Header = () =>{
    return(
        <header>
            <div className="header-wrapper">
                <h1>OverDrive</h1>
                <nav>
                    <p>Browse Collection</p>
                    <p>Apps</p>
                    <p>Libby Blog</p>
                </nav>
                {/* <form action="#">
                    <input type="text" placeholder="Search by title or autor" name="" id="" />
                    <img src="" alt="" />
                </form> */}
                <button> Sign In</button>
            </div>
        </header>
    )
}