import React from 'react'
import "./SignUp.css"
import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div>
      <div className="sign-up">
		<form id='signupform' action="#">
			<h1 id='signuph1'><span id='c'>C</span>reate  <span id='a'>A</span>ccount</h1>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button id="btn">Sign Up</button>
			<div id="com2">
            	Already a User?<Link to="/login">SignIn</Link>
			</div>
		</form>

	    </div>
        
    </div>
  )
}
