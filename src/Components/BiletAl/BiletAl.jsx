import React, { useState } from 'react';
import './BiletAl.css';
import titanic from '../Assets/titanic.png';

const BiletAlSayfasi = () => {
  const [secilenSinema, setSecilenSinema] = useState('');
  const [secilenTarih, setSecilenTarih] = useState('');
  const [secilenSeans, setSecilenSeans] = useState('');
  const [ogrenciBiletSayisi, setOgrenciBiletSayisi] = useState(0);
  const [tamBiletSayisi, setTamBiletSayisi] = useState(0);

  const sinemalar = ['Cinema 1', 'Cinema 2', 'Cinema 3'];
  const tarihler = ['2024-04-24', '2024-04-25', '2024-04-26'];
  const seanslar = ['10:00', '13:00', '16:00'];

  const handleSinemaSecim = (sinema) => {
    setSecilenSinema(sinema);
    setSecilenTarih('');
    setSecilenSeans('');
  };

  const handleTarihSecim = (tarih) => {
    setSecilenTarih(tarih);
    setSecilenSeans('');
  };

  const handleSeansSecim = (seans) => {
    setSecilenSeans(seans);
  };

  const handleOgrenciArtir = () => {
    setOgrenciBiletSayisi(prevSayi => prevSayi + 1);
  };

  const handleOgrenciAzalt = () => {
    if (ogrenciBiletSayisi > 0) {
      setOgrenciBiletSayisi(prevSayi => prevSayi - 1);
    }
  };

  const handleTamArtir = () => {
    setTamBiletSayisi(prevSayi => prevSayi + 1);
  };

  const handleTamAzalt = () => {
    if (tamBiletSayisi > 0) {
      setTamBiletSayisi(prevSayi => prevSayi - 1);
    }
  };

  return (
    <div className="bilet-al-container">
      <div className="nav-buttons">
        <a href="#" className="nav-button">HOME</a>
        <a href="#" className="nav-button">ABOUT US</a>
        <a href="#" className="nav-button">OUR TEAM</a>
        <a href="#" className="nav-button">MY PROFILE</a>
      </div>
      <h1>Ticket Selection Screen</h1>
      <div className="secimler">
        <div className="secim">
          <label>Cinema Selection:</label>
          <select value={secilenSinema} onChange={(e) => handleSinemaSecim(e.target.value)}>
            <option value="">Please choose a cinema</option>
            {sinemalar.map((sinema, index) => (
              <option key={index} value={sinema}>{sinema}</option>
            ))}
          </select>
        </div>
        {secilenSinema && (
          <div className="secim">
            <label>Date Selection:</label>
            <select value={secilenTarih} onChange={(e) => handleTarihSecim(e.target.value)}>
              <option value="">Please select a date</option>
              {tarihler.map((tarih, index) => (
                <option key={index} value={tarih}>{tarih}</option>
              ))}
            </select>
          </div>
        )}
        {secilenTarih && (
          <div className="secim">
            <label>Session Selection:</label>
            <select value={secilenSeans} onChange={(e) => handleSeansSecim(e.target.value)}>
              <option value="">Please select a session</option>
              {seanslar.map((seans, index) => (
                <option key={index} value={seans}>{seans}</option>
              ))}
            </select>
          </div>
        )}
        <div className="bilet-sayac">
          <label>Student:</label>
          <button onClick={handleOgrenciAzalt}>-</button>
          <span className="bilet-sayac-yazi">{ogrenciBiletSayisi}</span>
          <button onClick={handleOgrenciArtir}>+</button>
        </div>

        <div className="bilet-sayac2">
          <label>Not Student: </label>
          <button onClick={handleTamAzalt}>-</button>
          <span className="bilet-sayac-yazi">{tamBiletSayisi}</span>
          <button onClick={handleTamArtir}>+</button>
        </div>
      </div>
      <img src={titanic} alt="Titanic" className="film-posteri" />
      <div className="film-adi">TITANIC</div>
      <button className="blue-btn" disabled={!secilenSinema || !secilenTarih || !secilenSeans || (ogrenciBiletSayisi === 0 && tamBiletSayisi === 0)}>
        Seat Selection
      </button>

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

export default BiletAlSayfasi;
