import React from "react";


function MenuItem({ image, name, price,star }) {
  
  return (
    <>
  
      <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <p> ⭐{star} </p>

    </div>
    </>
  );
}

export default MenuItem;
