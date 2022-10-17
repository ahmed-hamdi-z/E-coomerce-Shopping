

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './AppNavigation/Navigation';


import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


function App() {
     return (
         <div>
           <div className="App">
            <BrowserRouter>
            
             <Header />
              <Navigation />
             <Footer />
             </BrowserRouter>
           </div>
        </div>
  );
}

export default App;
