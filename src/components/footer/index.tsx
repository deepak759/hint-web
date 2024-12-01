import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLogo from '../../assets/images/footer-logo.svg';
import TwitterLogo from '../../assets/images/twitter.svg';
import FacebookLogo from '../../assets/images/facebook.svg';
import LinkedinLogo from '../../assets/images/linkedin.svg';
import InstaLogo from '../../assets/images/insta.svg';
import { GLOBAL_CONSTANTS } from "@/utils/constants/global.constants";

const Footer = () =>{

    return(
        <div className="footer-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="newsletter-section">
                            <div className="text-section">
                                <div className="text">{GLOBAL_CONSTANTS.JOINTEXT}</div>
                                <div className="content">{GLOBAL_CONSTANTS.JOINCONTENT}</div>
                            </div>
                            <form 
                                className="newsletter-form"
                            >
                                <input type="email" value="" name="email" placeholder="Enter your email" className="email" required />
                                <input type="submit" value="Subscribe" name="subscribe" className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-top" id="contact-us">
                    <div className="row">
                        <div className="col">
                            <div className="footer-title">
                                <h4>{GLOBAL_CONSTANTS.CONPANYTEXT}</h4>
                            </div>
                            <ul>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.ABOUTUS_NAVLINKS}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.DOCTEXT}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.MEDICINE}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.PATHOLOGY}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.PHYSIOTHERAPY}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.NURSING}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.HINTUS_NAVLINKS}
                                    </Link>
                                </li>
                            </ul>
                        </div>
        
                        <div className="col">
                            <div className="footer-title">
                                <h4>{GLOBAL_CONSTANTS.QUICKLINKS}</h4>
                            </div>
                            <ul>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.WHYCHOOSE}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.FAQ}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.PATIENTCARE}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.NEWSLETTER}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.EVENTS}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.ARTICLES}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="footer-title">
                                <h4>{GLOBAL_CONSTANTS.LEGAL}</h4>
                            </div>
                            <ul>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.TERMS}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.PRIVACY}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.REFUND}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.DISCLAIMERTEXT}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="footer-title">
                                <h4>{GLOBAL_CONSTANTS.CONTACTUS}</h4>
                            </div>
                            <ul>
                                <li>{GLOBAL_CONSTANTS.PHONE}</li>
                                <li>{GLOBAL_CONSTANTS.EMAIL}</li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.WRTIETOUS}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.FEEDBACKTEXT}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        {GLOBAL_CONSTANTS.POSTQUERY}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="footer-title">
                                <h4>{GLOBAL_CONSTANTS.SOCIALTEXT}</h4>
                            </div>
                            <ul className="social-media-section">
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        <Image
                                            src={FacebookLogo}
                                            alt="facebook"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        <Image
                                            src={InstaLogo}
                                            alt="Instagram"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        <Image
                                            src={LinkedinLogo}
                                            alt="linkedin"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#"
                                    >
                                        <Image
                                            src={TwitterLogo}
                                            alt="twitter"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col">
                        <div className="content">
                            <Image
                                src={FooterLogo}
                                alt="logo"
                            />
                            <div className="text">
                                {GLOBAL_CONSTANTS.HINTFOOTERTEXT}<span className="hint-text">{GLOBAL_CONSTANTS.FOOTERTEXT}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default Footer;