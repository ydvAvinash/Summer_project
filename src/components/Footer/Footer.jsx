import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    IT Global is an authorized Dell distributor in Nepal, offering access to Dell's ISG and CSG products.
                    With expertise, service, and support, IT Global ensures customers receive high-quality products and services that meet their needs.
                    Customers in Nepal can benefit from the latest Dell technologies, expert advice, and support to help them achieve their business goals.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        2nd Floor - IT Plaza, Putalisadak,
                         Kathmandu 44600
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:01-5904710  01-5904711 </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: info@itglobal.com.np</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                    <span className="text">Laptops</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        IT GLOBAL 2023 CREATED BY AVINASH. ADVANCE IT
                        SOLUTIONS.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;