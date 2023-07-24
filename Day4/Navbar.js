

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Logo from "../assets/logo.jpeg";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/"> <img className="logo" src={Logo} alt="Logo" /> </Link>

        
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="centerSide">
        <div className="searchBar">
          <div className="SearchIcon">
          <input
            id="search"
            type="text"
            placeholder="Enter your search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "500px",
              height: "40px",
              borderRadius: "10px",
              padding: "0 10px",
              margintop: "60px",
              position: "relative",
            }}
            
          />
           <span><FaSearch /></span> 
          </div>

          <button onClick={handleSearch}>
          </button>
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Products </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Sign-Up </Link>
        <Link to="/cart" className="cartIcon">
          <FaShoppingBag />
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
