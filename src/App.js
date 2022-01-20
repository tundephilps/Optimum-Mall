import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';





function App () {
    return (<div>
        <Router>
        <Header />
        
            <Routes>
            <Route path='/' element={<Home />} />
                
            
            <Route path="/cart" element={<Cart />} /> 
            
            </Routes>
        
           </Router>
            </div>
    );
}


export default App;