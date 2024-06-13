// import './App.css'
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Signup from "./Components/Sing Up/Sing_up"
import Features from './Components/Features/Features'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Home1 from './Components/Home1/Home1'
import Book from './Components/book/Book'
import Details from './Components/passengerdetails/Details'
import Invoice from './Components/Invoice/Invoice'
import Ticket from './Components/Ticket/Ticket'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home1" element={<Home1/>}/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path="/book" element={<Book/>}/>
          <Route path='/details' element={<Details/>}></Route>
          <Route path='/invoice' element={<Invoice/>}></Route>
       <Route path="/ticket" element={<Ticket/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;