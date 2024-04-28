import React, { useState } from 'react'; 
import './MyProfile.css';

import profileIcon from '../Assets/user2.png'
import img1 from '../Assets/img5.png'
import img2 from '../Assets/img8.jpg'
import img3 from '../Assets/img7.jpg'
import img4 from '../Assets/img6.webp'

const MyProfile = () => {

  const [selectedItems, setSelectedItems] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems(selectedItems.filter(item => item !== itemToRemove));
  };
  return (
    <div className="transparent-container">
      <div className="nav-buttons">
        <a href="#" className="nav-button">HOME</a>
        <a href="#" className="nav-button">PAGE</a>
        <a href="#" className="nav-button">OUR TEAM</a>
        <a href="#" className="nav-button">CONTACT</a>
      </div>

      <div className="container">
      <div className="menu-button">
        <span onClick={toggleMenu}>...</span>
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li onClick={() => console.log('Edit Profile clicked')}>Edit Profile</li>
            <li onClick={() => console.log('Log Out clicked')}>Log Out</li>
            <li onClick={() => console.log('Delete Account clicked')}>Delete Account</li>
          </ul>
        </div>
      )}

        <h1>User Card</h1>
        <div className="name">
          Name:<span> Buket </span>
      </div>

      <div className="surname">
        Surname:<span> Arslan </span>
      </div>
      <div className="email">
        Email: <span> buketarslan@example.com </span>
      </div>
      <img src={profileIcon} alt="User Icon" className="profile-icon" /> 
      </div>
      
      <div className="myprofile">
        <p> My Profile </p>
           </div>

           <div className="mytickets">
               <h1>My Tickets</h1>
            <div className="scrollable-content">
              <p>Movie 1      -       xx/yy/zz -  00:00</p>
              <p>Movie 2      -       xx/yy/zz -  00:00</p>
              <p>Movie 3      -       xx/yy/zz -  00:00</p>
              <p>Movie 4      -       xx/yy/zz -  00:00</p>
              <p>Movie 5      -       xx/yy/zz -  00:00</p>
              <p>Movie 6      -       xx/yy/zz -  00:00</p>
            </div>
          </div>

          <div className="yourfavourites">
        <p> My Favorites </p>
           </div>
            <div className="wrap">
                <div className="card">
                    <img className="background" src={img1} alt="" />
                    <div className="card-content">
                        <h3 className="title">MOVIE 1</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div className="card">
                    <img className="background" src={img2} alt="" />
                    <div className="card-content">
                        <h3 className="title">MOVIE 2</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>

                <div className="card">
                    <img className="background" src={img3} alt="" />
                    <div className="card-content">
                        <h3 className="title">MOVIE 3</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>
                <div className="card">
                    <img className="background" src={img4} alt="" />
                    <div className="card-content">
                      <h3 className="title">MOVIE 4</h3>
                    </div>
                    <div className="backdrop"></div>
                </div>
            </div>

            <div className="selected-items">
                <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => handleRemoveItem(item)}>x</button>
                        </li>
                    ))}
                </ul>
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
                    <hr />
                </div>
            </footer>
    </div>
  );
};

export default MyProfile;