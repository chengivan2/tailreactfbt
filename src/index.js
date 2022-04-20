import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import womanreading from './images/woman-reading.png';
import blackivlogo1 from './images/blackivlogo-removebg.png';


function Car() {
  return <React.Fragment>
    <header className="site-navabar w-full h-screen pt-0">
            
      
        <div className="flex px-3 w-full pt-7 center justify-between items-center">
        <div className="w-1/2 pt-16 pl-2 text-white ">
          <h1 className='text-7xl pb-6 font-bold'>Let's <span><a href="#">Find</a></span> Your Next Reading Spree</h1>
          <p>Made this site with readers like me in mind. Hope you find it somehow helpful and fun. Dive into it!</p>
          <p>All Traders... Little gift for you here!</p>
        </div>
  
        <div className="header-image flex justify-end">
                <img src={womanreading} alt="woman reading" className='' />
            </div>
          </div>

        </header>
        </React.Fragment>;
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Car />);

//ReactDOM.render(<Car />, document.getElementById('root'));
