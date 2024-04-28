import React, { useState } from 'react';
import './Seats.css';
import './styles.css';

const Seats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatIndex) => {
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatIndex)) {
        return prevSelectedSeats.filter(seat => seat !== seatIndex);
      } else {
        return [...prevSelectedSeats, seatIndex];
      }
    });
  };

  const handleRowClick = (rowIndex) => {
    setSelectedSeats(prevSelectedSeats => {
      const rowSeats = Array.from({ length: 8 }, (_, i) => i + rowIndex * 8);  // Calculates the seats for the entire row
      const newSelectedSeats = prevSelectedSeats.some(seat => rowSeats.includes(seat))
        ? prevSelectedSeats.filter(seat => !rowSeats.includes(seat))  // Deselects the row if any seat is already selected
        : [...prevSelectedSeats, ...rowSeats];  // Selects all seats in the row if none are selected
      return newSelectedSeats.sort((a, b) => a - b);  // Sorts the array to maintain order
    });
  };

  return (
    <div className="App">
      <div className="nav-buttons">
        <a href="/" className="nav-button">HOME</a>
        <a href="/about" className="nav-button">ABOUT US</a>
        <a href="/team" className="nav-button">OUR TEAM</a>
        <a href="/profile" className="nav-button">MY PROFILE</a>
      </div>
      <div className="seat-area">
        <div className="Movies">
          <select>
            {/* Options here */}
          </select>
        </div>
        <ul className="ShowCase">
          <li>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'N/A'}</li>
          <li>Selected</li>
          <li>Occupied</li>
        </ul>
        <div className="Cinema">
          <div className="screen"></div>
          <div className="seats">
            {[...Array(64)].map((_, seatIndex) => (
              <div
                className={`seat ${selectedSeats.includes(seatIndex) ? 'selected' : ''}`}
                key={seatIndex}
                onClick={() => handleSeatClick(seatIndex)}
              ></div>
            ))}
          </div>
          <div className="row-buttons">
            {[...Array(8)].map((_, rowIndex) => (
              <button className="row-button" key={rowIndex} onClick={() => handleRowClick(rowIndex)}>
                Select Row {rowIndex + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="info">
          <p className="count">{selectedSeats.length} Seats Selected</p>
        </div>
      </div>
      <div className="payment-area">
        <button className="payment-button">Go to Payment</button>
      </div>
    </div>
  );
};

export default Seats;
