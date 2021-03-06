import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FunNav from './FunNav';
import FunHome from "./FunHome";
import Counter from './Counter';
import FunProds from './FunProds';
import FunAddProd from './FunAddProd';

const FunLanding = () => {
    return (
        <div>
            <Router>
                <FunNav />
                <Routes>
                    <Route path="/" element={<FunHome />}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/products" element={<FunProds />}/>
                    <Route path="/addproducts" element={<FunAddProd />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default FunLanding;