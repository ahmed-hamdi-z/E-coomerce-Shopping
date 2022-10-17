import * as React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';


import Navigation from './AppNavigation/Navigation';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";



function App() {
     return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Navigation />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
