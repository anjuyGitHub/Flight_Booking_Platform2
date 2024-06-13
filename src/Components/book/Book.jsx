import React, { useState, useEffect } from 'react';
import './../book/Book.css'
import { useLocation } from 'react-router-dom';
import flightdata from '../../flightdata.json';
import { useNavigate } from 'react-router-dom';


const Book = () => {
  const [flights, setFlights] = useState([]);
  const location = useLocation();
  const { id, id1,id2 } = location.state || {};

  useEffect(() => {
    // Filter flights based on selected cities
    const filteredFlights = flightdata.filter(flight => {
      return (
        (flight.departureCity === id && flight.destinationCity === id1) ||
        (flight.departureCity === id1 && flight.destinationCity === id)
      );
    });
    setFlights(filteredFlights);
  }, [id, id1]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  };

  const passanger = id2;
  const farevalue = flightdata[0].fare; // Assuming flightdata is an array and you want to access the first flight's fare
  const ticket_airline=flightdata[0].flightName;
  const ticket_from=id;
  const ticket_to=id1;
  const ticket_boardt_time=flightdata[0].departureDateTime;
  const ticket_departure_time=flightdata[0].departureDateTime;;
  const ticket_arrival_time=flightdata[0].arrivalDateTime;
  const ticket_gate = generateRandomNumber(); // Generate random gate number
  const ticket_seat = generateRandomNumber(); // Generate random seat number
  // const fare =flight[0].fare;

  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/details', {
      state: {
        sid2: passanger,
        sid3: farevalue,
        t12: ticket_airline,
        t13: ticket_from,
        t14: ticket_to,
        t15: ticket_boardt_time,
        t16: ticket_departure_time,
        t17: ticket_arrival_time,
        t18: ticket_gate,
        t19: ticket_seat,
        // fare: fare
      }
    });
  };

  return (
    <>
      <h1>Flight Details</h1>
      <p>Departure City: {id}</p>
      <p>Destination City: {id1}</p>
      <p>Passenger Number: {id2}</p>

      <table className='table'>
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Fare</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.flightName}</td>
              <td>{flight.departureDateTime}</td>
              <td>{flight.arrivalDateTime}</td>
              <td>{flightdata[0].fare}</td>
              <td>
              <div className="submit" onClick={goToProducts}>
              <button>Buy ticite</button>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Book;
