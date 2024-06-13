import React from 'react'
import Nav from '../Nav/Nav'
import '../Features/Features.css'
import Footer from '../Footer/Footer'

const Features = () => {
  return (
   <>
   <Nav/>
    <div className="fit">
    <div className='flight_features'>
     <h1>Features of Our Flight Booking Website</h1>
  <ul>
    <li><strong>Flexible Search:</strong> Easily search and filter flights based on your preferences and budget.</li>
    <li><strong>Best Deals:</strong> Find competitive prices and exclusive discounts on flights.</li>
    <li><strong>Transparent Pricing:</strong> Clear and upfront pricing with no hidden fees.</li>
    <li><strong>Secure Booking:</strong> Secure payment options and instant booking confirmation.</li>
    <li><strong>24/7 Support:</strong> Dedicated customer support available round-the-clock.</li>
    <li><strong>Easy Management:</strong> Manage your bookings, changes, and cancellations conveniently online.</li>
    <li><strong>Travel Insurance:</strong> Optional travel insurance for added peace of mind.</li>
    <li><strong>Customized Alerts:</strong> Receive notifications for price drops and flight updates.</li>
    <li><strong>Mobile Access:</strong> Access your bookings on-the-go with our mobile app.</li>
    <li><strong>Travel Guides:</strong> Explore destination guides and travel tips for your upcoming trip.</li>
    <li><strong>Group Bookings:</strong> Specialized features for group bookings and travel planning.</li>
  </ul>
  <Footer/>
    </div>
    </div>
   </>
  )
}

export default Features
