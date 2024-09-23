import React from "react";
import './style.css';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./q1/Counter";
//import Nav from "./q2/Nav";
//import Home from "./q2/Home";
//import About from "./q2/About";
// import Todo from "./q3/Todo";
// import Proptoc from "./q4/Proptoc";
//import Arraymap from "./q5/Arraymap";
// import Parent from "./q6/Parent";
// import Lifecycle from "./q7/Lifecycle";
//import Afruits from "./q8/Afruits";
//import Combine from "./q9/Combine";
//import Redus from "./q10/Redus";
// import Valid from "./q11/Valid";
import Fruitlist from "./q12/Fruitlist";
import Vegetablelist from "./q12/Vegetablelist";


const fruits = [
  { id: 1, name: 'Apple', price: 200.00, inStock: true },
  { id: 2, name: 'Banana', price: 80.00, inStock: false },
  { id: 3, name: 'Orange', price: 250.00, inStock: true },
];

const vegetables = [
  { id: 1, name: 'Carrot', price: 50.00, inStock: true },
  { id: 2, name: 'Tomato', price: 75.00, inStock: false },
  { id: 3, name: 'Lady Finger', price: 80.00, inStock: true },
];



function App() {
  
  return (
    <>
      <Counter num={0}/> 
    {/* <Router>
    <Nav/>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
    </Routes>
    </Router> */}
      {/* <Todo/> */}
      {/* <Proptoc name='Shriram'/> */}
      {/* <Arraymap/> */}
      {/* <Parent/> */}
      {/* <Lifecycle/> */}
      {/* <Afruits/> */}
      {/* <Combine/> */}
      {/* <Redus/> */}
      {/* <Valid/> */}
      <Fruitlist fruits={fruits} />
      <Vegetablelist vegetables={vegetables} />

     
    </>
  );
}

export default App;
