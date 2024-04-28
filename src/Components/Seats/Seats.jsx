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
      const rowSeats = Array.from({ length: 8 }, (_, i) => i + rowIndex * 8);
      const newSelectedSeats = prevSelectedSeats.some(seat => rowSeats.includes(seat))
        ? prevSelectedSeats.filter(seat => !rowSeats.includes(seat))
        : [...prevSelectedSeats, ...rowSeats];
      return newSelectedSeats.sort((a, b) => a - b);
    });
  };

  return (
    <div className="App">
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
        <div className="seat-container">
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
              <button className="row-button" key={rowIndex} onClick={() => handleRowClick(rowIndex)}>Row {rowIndex + 1}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="info">
        <p className="count">{selectedSeats.length} Seats Selected</p>
        {/* Calculation for total */}
      </div>
    </div>
  );
};

export default Seats;