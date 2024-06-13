import React from 'react'
import Nav from './../Nav/Nav'
import '../Home/Home.css';
import airportname from './.././../airports.json';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('oneWay');
  const [returnDateVisible, setReturnDateVisible] = useState(false);
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [bookingLevel, setBookingLevel] = useState('economy');
  const [errorMessage, setErrorMessage] = useState('');
  const [passengerCount, setPassengerCount] = useState(''); // State for passenger count

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'roundTrip') {
      setReturnDateVisible(true);
    } else {
      setReturnDateVisible(false);
    }
  };

  const handleDepartureCityChange = (event) => {
    setDepartureCity(event.target.value);
  };

  const handleDestinationCityChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleBookingLevelChange = (event) => {
    setBookingLevel(event.target.value);
  };

  const handlePassengerCountChange = (event) => {
    setPassengerCount(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    // Check if any required fields are empty
    if (!departureCity || !destinationCity || !departureDate || !passengerCount) {
      setErrorMessage('All fields are required!');
      return;
    }
    
    // Reset error message
    setErrorMessage('');
    // Logic to handle form submission
    console.log('Form submitted');
  };

  const dCity = destinationCity;
const desCity = departureCity;
const pasnumber=passengerCount;
const navigate = useNavigate();

  const goToFeatures = () => {
    navigate('/book', { state: {id:dCity,id1:desCity,id2:pasnumber} });
  };

  const airports = airportname.airports || [];

  return (
    <>
    <Nav/>
      <div className="head">
      <h1>Welcome</h1>
        <h3>Book Ticket to fill form</h3>
      </div>
      <div className="container">
        <div className="form">
          <label htmlFor="departureCity">From</label>
          <select value={departureCity} onChange={handleDepartureCityChange}>
            <option value="">--Select City--</option>
            {airports.map((airport, index) => (
              <option value={airport.city_name} key={index}>{airport.city_name}</option> 
            ))}
          </select> 

          <label htmlFor="destinationCity">To</label>
          <select value={destinationCity} onChange={handleDestinationCityChange}>
            <option value="">--Select City--</option>
            {airports.map((airport, index) => (
              <option value={airport.city_name} key={index}>{airport.city_name}</option> 
            ))}
          </select> 
 
          <label htmlFor="departureDate">Departure Date</label>
          <input type="date" id="departureDate" value={departureDate} onChange={handleDepartureDateChange} />

          <div className="way">
            <div className="w1">
              <input
                type="radio"
                id="oneWay"
                name="tripType"
                value="oneWay"
                checked={selectedOption === 'oneWay'}
                onChange={() => handleOptionChange('oneWay')}
              />
              <label htmlFor="oneWay">One-Way</label>
            </div>
            <div className="w2">
              <input
                type="radio"
                id="roundTrip"
                name="tripType"
                value="roundTrip"
                checked={selectedOption === 'roundTrip'}
                onChange={() => handleOptionChange('roundTrip')}
              />
              <label htmlFor="roundTrip">Round Trip</label>
            </div>
          </div>

          {returnDateVisible && (
            <div className="returnDate">
              <label htmlFor="returnDate">Return Date</label>
              <input type="date" id="returnDate" />
            </div>
          )}

          <div className="bookingLevel">
            <label htmlFor="bookingLevel">Booking Level</label>
            <select id="bookingLevel" value={bookingLevel} onChange={handleBookingLevelChange}>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="firstClass">First Class</option>
            </select>
          </div>
       

          <div className="passengerCount">
          <label htmlFor="passengerCount">Passenger Number</label>
          <input
          type="number"
          id="passengerCount"
          value={passengerCount}
          onChange={handlePassengerCountChange}
          min="1"
          />
           </div>

           <div className="message">    
          [All filed are required then you can submit]
          </div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          
          {departureCity && destinationCity && departureDate && passengerCount && (
            <div className="submit" onClick={goToFeatures}>
              
                <button onClick={handleSubmit}>Search</button>
              
            </div>
          )}
        </div>

      </div>
      
    </>
  );
};

export default Home;

