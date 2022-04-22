import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Product'
import './index.css';
import womanreading from './assets/woman-reading.png';



function Car() {
  return <React.Fragment>
    <div className="navbar sticky top-0 z-50 justify-start py-4 pr-0 flex-nowrap text-black text-bold bg-[#EBEBEB]">
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            <li tabindex="0">
              <a>
                Demos
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li><a>Submenu 3</a></li>
                <li><a>Submenu 4</a></li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
                Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li><a>Submenu 3</a></li>
                <li><a>Submenu 4</a></li>
              </ul>
      </li>
      <li tabindex="0">
        <a>
          Dietary
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <li><a>Search</a></li>
      <li><a>Shop</a></li>
      <li tabindex="0">
        <a>
          Pages
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <div className="flex items-end mt-2 lg:mt-0 lg:ml-5">
        <li>
          <a>Cart</a>
        </li>
        <li>
          <a>Sign In</a>
        </li>
      </div>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BoroBazar</a>
  </div>
  <div className="navbar-start w-3/4 hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li tabindex="0">
        <a>
          Demos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Categories
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Dietary
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <li><a>Search</a></li>
      <li><a>Shop</a></li>
      <li tabindex="0">
        <a>
          Pages
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
          <li><a>Submenu 4</a></li>
        </ul>
      </li>
      <div className="flex lg:ml-[10rem]">
        <li>
          <a>Cart</a>
        </li>
        <li >
          <a>Sign In</a>
        </li>
      </div>
    </ul>
  </div>
</div>
    <header className=" w-full h-fit md:h-screen pb-0">
      
      <div className='flex flex-col md:flex-row px-3 relative w-full h-full'>
        <div className="flex items-center">
          <div className="pt-16 pl-5 pr-4 text-white ">
            <h1 className='text-7xl pb-6 font-bold'>Let's <span><a href="#">Find</a></span> Your Next Reading Spree</h1>
            <p>Made this site with readers like me in mind. Hope you find it somehow helpful and fun. Dive into it!</p>
            <p>All Traders... Little gift for you here!</p>
          </div>
        </div>
  
        <div className="flex items-center">
          <img src={womanreading} alt="woman reading" className='' />
        </div>
      </div>

    </header>

    <section className='px-0 md:px-10 flex justify-center pt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-20 px-4'>
        <App />
      </div>
    </section>

    <footer className="footer mt-[50px] p-10 bg-[#d8d8d8] mb-0 text-base-content">
      <div className="flex flex-col pr-20">
        <p className='md:pr-16 h'><span className='font-bold text-[#252525] '>BoroBazar</span></p><br/>
        <p>We offers high-quality foods and the best delivery service, and the food market you can blindly trust</p>
      </div>

      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </div> 

      <div>
        <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
      </div> 

      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </div>
   
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>

        <div>
          <span className="footer-title">Newsletter</span> 
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input bg-[transparent] input-bordered w-full pr-16"/> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
          </div>
        </div>
  
    </footer>

        </React.Fragment>;
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Car />);

