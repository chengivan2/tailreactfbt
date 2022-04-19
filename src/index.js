import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import womanreading from './images/woman-reading.png';
import blackivlogo1 from './images/blackivlogo-removebg.png';


function Car() {
  return <header className="w-full h-screen pt-0">


    <nav class="lg:flex justify-between flex-wrap bg-transparent pt-1 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src={blackivlogo1} className="max-h-28"/>
          </div>

          <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <title>Menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                </button>
          </div>

          <div class="block lg:flex md:items-center lg:w-auto pr-3 justify-end mr-3">
              <div class="text-sm lg:flex md:flex-none justify-around">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Home
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  About
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  Contact Us
                </a>
                    </div>
            </div>
      </nav>

  <div className="flex px-3 w-full pt-7 center justify-between items-center">
      <div className="w-1/2 pt-16 pl-2 text-white ">
          <h1 className='text-7xl pb-6 font-bold'>Let's <span><a href="#">Find</a></span> Your Next Reading Spree</h1>
          <p>Made this site with readers like me in mind. Hope you find it somehow helpful and fun. Dive into it!</p>
          <p>All Traders... Little gift for you here!</p>
      </div>
  
      <div class="header-image flex justify-end">
                <img src={womanreading} alt="woman reading" className='' />
            </div>
  </div>

</header>;
}

ReactDOM.render(<Car />, document.getElementById('root'));
