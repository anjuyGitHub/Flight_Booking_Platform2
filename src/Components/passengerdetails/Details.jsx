import React, { useState } from 'react';
import './../passengerdetails/Details.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [passengerCount, setPassengerCount] = useState(location.state.sid2 || 1);
  const [formFilled, setFormFilled] = useState(false);
  const [usernames, setUsernames] = useState(Array.from({ length: passengerCount }, () => '')); // Initialize an array to store usernames

  const handlePassengerCountChange = (count) => {
    setPassengerCount(count);
    setUsernames(Array.from({ length: count }, () => ''));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.trim() === '') {
      setFormFilled(false);
      return;
    }
    // Check if all fields in all forms are filled
    let allFilled = true;
    const forms = document.querySelectorAll('.passenger-form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input[type="text"], input[type="number"], input[type="date"]');
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          allFilled = false;
          return;
        }
      });
    });
    setFormFilled(allFilled);
  };


  const usernamework = (e, index) => {
    const updatedUsernames = [...usernames];
    updatedUsernames[index] = e.target.value;
    setUsernames(updatedUsernames);
  };

  // Calculate total fare based on fare value and number of passengers
  const totalFare = location.state.sid3 * passengerCount;
  const passangernumber=location.state.sid2;
  const farevalue=location.state.sid3;
  const t12=location.state.t12;
  const t13=location.state.t13
  const t14=location.state.t14
  const t15=location.state.t15
  const t16=location.state.t16
  const t17=location.state.t17
  const t18=location.state.t18
  const t19=location.state.t19
  

  // const fname=
  
  const goToAbout = () => {
    navigate('/Invoice', {
      state: {
        sid2:passangernumber,
        sid3:farevalue,
        sid4:totalFare,
        t12:t12,
        t13:t13,
        t14:t14,
        t15:t15,
        t16:t16,
        t17:t17,
        t18:t18,
        t19:t19,
        usernames1: usernames,

      }
    });
  };
  const renderPassengerForms = () => {
    return Array.from({ length: passengerCount }, (_, index) => (
      <div className="passenger" key={index}>
        <h2 className='passenger-number'>Passenger {index + 1}</h2>
        <div className="fill-form passenger-form">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input type="text" name={`firstName${index}`}  onChange={(e) => usernamework(e, index)} />
            <label >Middle Name</label>
            <input type="text" name={`middleName${index}`} onChange={handleInputChange} />
            <label >Last Name</label>
            <input type="text" name={`lastName${index}`} onChange={handleInputChange} />
          </div>
          <div className="othersinfo">
            <label >Contact No</label>
            <input type="number" name={`contactNo${index}`} onChange={handleInputChange} />
            <label>DOB</label>
            <input type="date" name={`dob${index}`} onChange={handleInputChange} />
          </div>
          <div className="line">.</div>
        </div>
       
      </div>
    ));
  };
  return (
    <>
      <h1>Ticket amount: {location.state.sid3}.</h1>
      <h1>Total Fare: {totalFare}</h1> {/* Display total fare here */}
     
      <div className="details">
        {renderPassengerForms()}
      </div>
      <div className="passenger-controls">
        <label htmlFor="passenger-count">Passenger Count:</label>
        <input type="number" id="passenger-count" value={passengerCount} onChange={(e) => handlePassengerCountChange(Number(e.target.value))} />
      </div>
      <div className="submit">
        <button onClick={goToAbout}>Proceed</button>
      </div>
    </>
  );
};

export default Details
