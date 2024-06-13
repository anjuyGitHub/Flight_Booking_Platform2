import React, { useState } from 'react';
import '../Invoice/Invoice.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Invoice = () => {
  const location = useLocation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiration || !cvv || !paymentAmount) {
      setPaymentError('Please fill all fields.');
      return;
    }

    if (Number(paymentAmount) !== totalFare) {
      setPaymentError('Incorrect payment amount.');
      return;
    }
    

    // Logic to handle payment
    // Here, you can validate the payment details and amount entered
    // For simplicity, I'm just setting paymentSuccess to true
    setPaymentSuccess(true);
    setPaymentError('');
  };

  // const tfirstName=location.state.t1;


  const navigate=useNavigate();
  
  const totalFare=location.state.sid4;
  const sid2=location.state.sid2;
  const sid3=location.state.sid3;
  const t12=location.state.t12;
  const t13=location.state.t13
  const t14=location.state.t14
  const t15=location.state.t15
  const t16=location.state.t16
  const t17=location.state.t17
  const t18=location.state.t18
  const t19=location.state.t19
  const usernames = location.state.usernames1;
 

  function goToTicket(){
    navigate("/ticket",{state:{ sid2: sid2,sid3:sid3,t12:t12,t13:t13,t14:t14,t15:t15,t16:t16,t17:t17,t18:t18,t19:t19,usernames:usernames}})
  }

  return (
    <>
      <h1>PAY INVOICE</h1>
      <h1>About</h1>
      <h1>TotalFare value:{totalFare}</h1>
      <h1>Number of Passenger:{location.state.sid2}</h1>


      <div className="pay-invoice">
        <div className="card-number">
          <p>Enter Card number</p>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div className="card-details">
          <p>Expiration</p>
          <input type="date" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
          <p>CVV</p>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <div className="amount">
          <p>Total Amount to pay : {totalFare}</p>
          <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
        </div>
        <div className="pay">
          <button onClick={handlePayment}>Pay</button>
        </div>
      </div>
      {paymentError && <span className="error">{paymentError}</span>}
      {paymentSuccess && (
        <div className="payment-success">
          <h1>Payment successful!</h1>
          <h1 onClick={goToTicket}>Click here to get your tickets.</h1>
        </div>
      )}
    </>
  );
};

export default Invoice;
