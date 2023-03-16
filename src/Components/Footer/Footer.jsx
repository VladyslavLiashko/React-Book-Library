import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import link from "../../assets/link.png";
import tw from "../../assets/tw.png";
import yt from "../../assets/yt.png";
import logo from "../../assets/logo.png";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-block">
                    <div className="footer-logo-block">
                        <img src={logo} alt="" />
                    </div>
                    <p>Nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat. </p>
                    <div className="footer-media-block">
                        <img src={fb} alt="" />
                        <img src={link} alt="" />
                        <img src={tw} alt="" />
                        <img src={yt} alt="" />
                    </div>
                </div>
                <div className="footer-block">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>BOOKS</li>
                        <li>EBOOKS</li>
                        <li>NEW RELEASE</li>
                        <li>CONTACT US</li>
                        <li>BLOG</li>
                    </ul>
                </div>
                <div className="footer-block">
                    <h1>LATEST NEWS</h1>
                    <div className="footer-news">
                        <div className="news">
                            <img src={news1} alt="" />
                            <div className="news-text">
                                <h1>Nostrud exercitation</h1>
                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="news">
                            <img src={news2} alt="" />
                            <div className="news-text">
                                <h1>Nostrud exercitation</h1>
                                <p>Nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-last">
                <p>© 2023 Arihant. All Rights Reserved.</p>
                <p>Made by<a href="https://github.com/VladyslavLiashko"> Vladyslav Liashko</a></p>
            </div>
        </div>
    )
}