import React, { Fragment } from "react";

const footer = () => {
  return (
    <Fragment>
      <footer className="py-1">
      <div id="foot-main" className="container container-fluid">
        <div className="row justify-content-md-center">

           <div id="foot-left" className="col-sm ">
            <ul>
              <li>
                
              </li>
            </ul>
           </div>

           <div id="foot-center" className="col-sm">
            One of three columns
           </div>

           <div id="foot-right" className="col-sm">
            One of three columns
           </div>
        </div>
      </div>
        <p className="text-center mt-1">
          Shopping Cart - 2022-2023, All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default footer;
