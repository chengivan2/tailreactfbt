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
    <div className="navbar sticky top-0 z-50 justify-start py-4 pr-0 flex-nowrap bg-white">
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
        </React.Fragment>;
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Car />);