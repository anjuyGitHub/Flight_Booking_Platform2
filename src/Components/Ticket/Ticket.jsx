import React from 'react';
import '../Ticket/Ticket.css';
import img from '../Assets/ticket.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Ticket = () => {
    const location = useLocation();
    const navigate= useNavigate();

   

    const usernames = location.state.usernames;

    const handlePrint = () => {
        window.print(); // This will open the print dialog
    };

    const gotoHomepage=()=>{
        navigate('/home1');
    };

    const renderTickets = () => {
        const tickets = [];
        for (let i = 0; i < location.state.sid2; i++) {
            const randomGate = Math.floor(Math.random() * 100) + 1; // Random gate number between 1 and 100
            const randomSeat = Math.floor(Math.random() * 50) + 1; // Random seat number between 1 and 50
            
            tickets.push(
                <div className="content">
                 <div key={i} className="ticket">
                    {/* Your ticket details */
                    <div className="ticket">
        <div className="ticket-details">
            <div className="heading">
                <p>Online Flight Booking</p>
                <span>ECONOMY CLASS</span>
            </div>
            <div className="airline-details">
                <div>
                <p>AIRLINE</p>
                <span>{location.state.t12}</span>
                </div>
               <div> <p>FROM</p>
                <span>{location.state.t13}</span></div>
                <div><p>TO</p>
                <span>{location.state.t14}</span></div>
            </div>
            <div className="passenger-details">
              <div>
              <p>PASSENGER NAME</p>
              <span>Name: {location.state.usernames[i]}</span> {/* Use usernames array for names */}
              </div>
              <div>
              <p>BOARD TIME</p>
                <span>{location.state.t15}</span>
              </div>
            </div>
            <div className="departure-details">
                <div>
                <p>DEPARTURE</p>
                <span>{location.state.t16}</span>
                </div>
                <div>
                <p>ARRIVAL</p>
                <span>{location.state.t17}</span>
                </div>
                <div>
                    <p>GATE</p>
                    <span>{randomGate}</span>
                </div>
                <div>
                    <p>SEAT</p>
                    <span>{randomSeat}</span>
                </div>
            </div>
           
        </div>
        <div className="img-details">
            <p>Online Flight Booking</p>
            <img src={img} alt="flight-img-to-show"  className='ticket-img'/>
            <p>Thank you for choosing us.</p>
            <p>Please be at the gate at boarding time</p>
        </div>
        </div>
        }
            
            
</div>

                   <div className="section">
                    ..............................................................................................................................................................................
                   </div>
           
                </div> );
        }
        return tickets;
    };

    return (
        <>
         
            <h1>Total Passengers: {location.state.sid2}</h1>
          

            <h1>E-TICKETS</h1>
            {renderTickets()}
            <div className="print">
        <button onClick={handlePrint}>Print Ticket</button>
        </div>
        <div onClick={gotoHomepage}>
            go to Home page
        </div>
        </>
    );
};

export default Ticket;
