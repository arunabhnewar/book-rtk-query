import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import BookSearch from "../Filter/BookSearch";

const Navbar = () => {
  return (
    <nav className='py-4 2xl:px-6'>
      <div className='container flex items-center justify-between'>
        <img src={logo} width='150px' className='object-contain' />

        <ul className='hidden md:flex items-center space-x-6'>
          <Link
            className='font-semibold cursor-pointer'
            to='/'
            id='lws-bookStore'>
            <li>Book Store</li>
          </Link>
          <Link className='cursor-pointer' to='/books/add' id='lws-addBook'>
            <li>Add Book</li>
          </Link>
        </ul>
        <BookSearch />
      </div>
    </nav>
  );
};

export default Navbar;
