import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/navbar.css"

export default function NavBar(props) {

  if (props.type) {
    return (
      <nav>
        <NavLink to="/"><img src="/logo.png" alt="logo" className="logo" /></NavLink>
        <input type="search" name="search" placeholder="Search ..." className="nav-search" />
        <ul className="nav-right">
          <li ><NavLink to="" className="nav-item">Categories</NavLink></li>
          <li ><NavLink to="/sign-in" className="nav-item">Login</NavLink></li>
          <li ><NavLink to="/cart" className="nav-item"><img src="/shopping-bag.png" alt="" /></NavLink></li>
        </ul>
      </nav>
    )
  }
  else {
    return (
      <nav>
        <NavLink to="/"><img src="/logo.png" alt="logo" className="logo" /></NavLink>
        <input type="search" name="search" placeholder="Search ..." className="nav-search" />
        <ul className="nav-right">
          <li ><NavLink to="/seller/add-product" className="nav-item">Add Product</NavLink></li>
          <li ><NavLink to="/seller" className="nav-item">My Products</NavLink></li>
        </ul>
      </nav>
    )
  }
}