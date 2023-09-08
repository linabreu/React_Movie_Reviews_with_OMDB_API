import React, {Component} from 'react';


//functional component bc just for UI display
export default function Footer() {
return (
        <div className="footer-basic row">
            <div className = "col-sm-3"></div>
            <div className = "col-sm-6">
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Contact</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">MovieSmith © 2023</p>
            </div>
            <div className = "col-sm-3"></div>
    </div>
    );}