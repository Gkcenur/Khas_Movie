

import React from 'react';
import './OurTeam.css'; 
import Gokce from '../Assets/Gokce.jpeg';
import Buket from '../Assets/Buket.jpeg';
import Gaye from '../Assets/Gaye.jpeg';
import Ayberk from '../Assets/Ayberk.jpeg';

function MainPage() {
    return (
        <div>
            <div className="nav-buttons">
                <a href="#" className="nav-button">HOME</a>
                <a href="#" className="nav-button">ABOUT US</a>
                <a href="#" className="nav-button">OUR TEAM</a>
                <a href="#" className="nav-button">MY PROFILE</a>
            </div>

            <div className="images-container">
                <div className="image-container">
                    <img src={Gokce} alt="Gokce" className="image" />
                    <p>Gökçenur Koçak: gokcenur.kocak@stu.khas.edu.tr</p>
                </div>
                <div className="image-container">
                    <img src={Buket} alt="Buket" className="image" />
                    <p>Buket Arslan: buketarslan@stu.khas.edu.tr</p>
                </div>
                <div className="image-container">
                    <img src={Gaye} alt="Gaye" className="image" />
                    <p>Gaye Aksoy: gayee.aksoy@stu.khas.edu.tr</p>
                </div>
                <div className="image-container">
                    <img src={Ayberk} alt="Ayberk" className="image" />
                    <p>Ayberk Dinçkol: ayberk.dinckol@stu.khas.edu.tr</p>
                </div>
            </div>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3 text-center">
                            <h6 className="footer-title">CURRENTLY SHOWING</h6>
                            <ul className="footer-links">
                                <li><button>CS1</button></li>
                                <li><button>CS2</button></li>
                                <li><button>CS3</button></li>
                                <li><button>CS4</button></li>
                                <li><button>CS5</button></li>
                                <li><button>CS6</button></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3 text-center">
                            <h6 className="footer-title">COMING SOON</h6>
                            <ul className="footer-links">
                                <li><button>Home</button></li>
                                <li><button>Contact Us</button></li>
                                <li><button>About Us</button></li>
                                <li><button>My Profile</button></li>
                                <li><button>Log in</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;