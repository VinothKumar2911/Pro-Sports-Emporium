import React from 'react'
import "./SignIn.css"
import {Link} from "react-router-dom"

export default function SignIn() {
  return (
    <div>
      <div className="sign-in">
		<form id='loginform' action="#">
			<h1 id='loginh1'><span id='s'>S</span>ign <span id='i'>i</span>n</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button id="btn">Sign In</button>
			<div className='com1'>
			Not a User?<Link to="/signup">SignUp</Link>

			</div>
		</form>
	</div>
    </div>
  )
}
