import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">col1</div>
            <div className="col">col2</div>
            <div className="col">col3</div>
            <div className="col">col4</div>
        </div>
    </footer>;
};

export default Footer;
