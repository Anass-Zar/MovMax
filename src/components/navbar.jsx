import './navbar.css';
import { useState } from "react";
import sin from "../images/in.png";
import sup from "../images/up.png";
import movmax from "../images/movmax.png";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  
  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const toggleSignInUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <Link to="/">
          <img src={movmax} alt="movmax" className='logo' />
        </Link>
        <div className="gg">
          <input type="search" name="" id="" className='search' placeholder='Search'/>
          <Link to="/movies" className='movies-link'>Movies</Link>
          <button onClick={toggleDivVisibility} className='button_signin'>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        {isDivVisible && (
          <>
            <div className="overlay" onClick={toggleDivVisibility}></div>
            <div className="centeredDiv">
              <div className="signin">
              <img src={isSignIn ? sin : sup} alt="Logo" className="image" />
                <div className="info">
                  <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                  <p className='welcome'>{!isSignIn ? "Welcome Back" : "Create an Account"}</p>
                    {!isSignIn && (
                      <div className="inputs">
                        <div className="hh">
                          <input type="text" id="username" name="username" placeholder="Username or email" className="input" />
                          <input type="password" id="password" name="password" placeholder="Password" className="input" />
                          <a href="" className='forget'>Forget password</a>
                        </div>
                        <button className='login'>Sign in</button>
                        <p>Dont have an account?
                          <button className="toggleButton" onClick={toggleSignInUp}>Sign up</button>
                        </p>
                      </div>
                    )}
                    {isSignIn && (
                    <div className="inputs">
                      <div className="hh">
                        <input type="text" id="email" name="email" placeholder="Email" className="input" />
                        <input type="text" id="username" name="username" placeholder="Username" className="input" />
                        <input type="password" id="password" name="password" placeholder="Password" className="input" />
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" className="input" />
                      </div>
                      <button className='login'>Sign Up</button>
                      <p>Already have an account?
                        <button className="toggleButton" onClick={toggleSignInUp}>Sign in</button>
                      </p>
                  </div>
                    )}
                </div>
              </div>
              <button onClick={toggleDivVisibility} className='button_x'>×</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
