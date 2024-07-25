import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import Functionone from './Functionone';
import Functiontwo from './Functiontwo';
import Functionthree from './Functionthree';
import Functionfour from './Functionfour';
import Functionfive from './Functionfive';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <App2/> */}
    {/* <Functionone></Functionone> */}
    {/* <Functiontwo></Functiontwo> */}
    {/* <Functionthree></Functionthree> */}
    {/* <Functionfour greet = "morning !" greet2 = "evening"/> */}
    <Functionfive message = "message 1"/>
  </React.StrictMode>
);


