import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details/Details";

import Address from "./Address/Address";
import React from "react";
const App = () => {
    return (
      <div >
        <Router>
          <Routes>
            <Route path="/" element={<Address />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default App;