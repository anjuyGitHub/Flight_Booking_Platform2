import React from 'react'
import Nav from '../Nav/Nav'
import '../Products/Products.css'
import Footer from '../Footer/Footer'


const Products = () => {
  return (
    <>
    <Nav/>
     <div className="fit">
     <div className='products'>
      <h1>Our Products</h1>
      <h3>Flight Tickets</h3>
  <p>Discover a world of possibilities with our flight booking service. We offer a vast selection of flights to destinations across the globe, ensuring that you can find the perfect itinerary for your travel needs.</p>
  <p>With our intuitive search engine, you can easily compare prices, airlines, and travel times to find the best deals available. Whether you're planning a spontaneous getaway or a meticulously planned vacation, our platform provides the tools you need to book your flights with ease.</p>
  <p>Our commitment to customer satisfaction means that we prioritize convenience, affordability, and reliability in every booking. With transparent pricing and flexible booking options, you can trust us to make your travel dreams a reality.</p>
  <p>Experience seamless booking from start to finish with our user-friendly interface and dedicated customer support team. From securing your tickets to managing your reservations, we're here to assist you every step of the way.</p>
  <p>Join millions of satisfied travelers who rely on us for their flight booking needs. Let us help you embark on your next adventure with confidence and peace of mind.</p>
  <Footer/>
    </div>
     </div>
    </>
  )
}

export default Products
