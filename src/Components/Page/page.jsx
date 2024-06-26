import React, { useState } from 'react';
import './page.css';
import titanic from '../Assets/titanic.png';
import vizyon from '../Assets/vizyon.png';
import tur from '../Assets/tur.png';
import time from '../Assets/time.png';

const Page = () => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [rating, setRating] = useState(0);

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleRating = (value) => {
        setRating(value);
    };

    // Sabit bir IMDB puanı varsayalım (örneğin, 7.8)
    const imdbRating = 7.8;

    return (
        <div className="page">
            <div className="nav-buttons">
                <a href="#" className="nav-button">HOME</a>
                <a href="#" className="nav-button">ABOUT US</a>
                <a href="#" className="nav-button">OUR TEAM</a>
                <a href="#" className="nav-button">MY PROFILE</a>
            </div>
            <div className="film-info">
                <div className="film-image">
                    <img src={titanic} alt="Titanic Resmi"/>
                    <div className="vizyon-info">
                        <img src={vizyon} alt="Vizyon Tarihi"/> <p>Vision date: 19.04.2024</p>
                    </div>
                    <div className="tur-info">
                        <img src={tur} alt="Tür"/> <p>Drama, Romance</p>
                    </div>
                    <div className="time-info">
                        <img src={time} alt="Time"/> <p>3h 14m</p>
                    </div>
                </div>
                <div className="film-details">
                    <h2 className="neon-blue">TITANIC</h2>
                    <h3>Director: James Cameron</h3>
                    <h3>Cast: Leonardo DiCaprio, Kate Winslet, Billy Zane</h3>
                    <p className="neon-blue">Subject of the Movie</p>
                    <p1 className="film-plot">Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Leonardo DiCaprio and Kate Winslet star as members of different social classes who fall in love during the ship's maiden voyage.</p1>
                    <div className="rating">
                        <span>Your Score: {rating}</span>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={star <= rating ? 'filled' : ''}
                                    onClick={() => handleRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="imdb-rating">
                        <span>IMDB: {imdbRating}</span>
                    </div>
                </div>
            </div>
            <div className="actions">
                <div className="buttons">
                    <button className="blue-btn" onClick={handleFavorite}>
                        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <button className="blue-btn">Buy a ticket</button>
                </div>
            </div>
            <footer className="site-footer">
                <div className="container1">
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
};

export default Page;
