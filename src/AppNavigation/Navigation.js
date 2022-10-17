import * as  React from "react";
import path from './Routes'
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

import ProductDetails from "../components/product/productDetails";


export default function Navigation() {
    return (
        <div>
            <Routes>
                <Route path={path.Home} element={<Home />} />
                <Route exact path={'/'} element={<Home />} />

                <Route exact path= '/search/:keyword' element={<Home />} />

                <Route exact path="/product/:productid" element={<ProductDetails />} />

            </Routes>

 
        </div> 
    )
}