import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () =>{
    return(
        <header>
            <div className="header-wrapper">
                <h1>OverDrive</h1>
                <nav>
                    <NavLink to = '/' style={{textDecoration:'none'}}><p>Home</p></NavLink>
                    <NavLink to ='/Collection' style={{textDecoration:'none'}}><p>My Collection</p></NavLink> 
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