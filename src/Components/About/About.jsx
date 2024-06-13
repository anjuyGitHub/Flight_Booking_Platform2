import React from 'react'
import '../About/About.css'
import Nav from '../Nav/Nav'
// import Aboutimg from '../Assets/about.jpg'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
    <Nav/>
    <div className="fit">
    <div className='about'>
      <h1>About Us</h1>
      <span>Welcome to our flight booking website! We are dedicated to making your travel experience as seamless and enjoyable as possible.</span>
      <span>At our company, we understand the importance of travel in today's world. Whether you're jetting off for a business meeting, embarking on a well-deserved vacation, or visiting loved ones, we're here to helspanyou get there.</span>
      <p>Our team is comprised of travel enthusiasts who are passionate about helping you find the best deals and the most convenient routes. We work tirelessly to ensure that you have access to a wide range of flights, accommodations, and travel options, so you can tailor your trispanto your exact needs.</p>
      <p>With our user-friendly website and dedicated customer support team, booking your next adventure has never been easier. We offer competitive prices, flexible booking options, and round-the-clock assistance to ensure that your journey is smooth from start to finish.</p>
      <p>Thank you for choosing us as your travel partner. We look forward to helping you explore the world and create memories that will last a lifetime.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to empower travelers by providing them with the tools and resources they need to plan and book their trips with confidence. We believe that travel has the power to enrich lives, foster connections, and broaden horizons, and we are committed to making it accessible to everyone.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions, feedback, or concerns, please don't hesitate to get in touch with us. Our customer support team is available 24/7 to assist you.</p>
      <p>Phone: 1-800-123-4567</p>
      <p>Email: info@example.com</p>
      <p>Address: 123 Main Street, City, Country</p>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default About
