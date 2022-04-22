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
      <div className='grid grid-cols-1 md:grid-cols-4 gap-20 px-4'>
        <App />
      </div>
    </section>

    <footer className="footer mt-10 p-10 bg-base-200 text-base-content">
  <div className='pr-10'>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p className='pr-10'><span className='font-bold'>BoroBazar</span><br/>We offers high-quality foods and the best delivery service, and the food market you can blindly trust</p>
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
</footer>

        </React.Fragment>;
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Car />);
