import React from 'react'
import { Link } from 'react-router'
import "../style/form.scss";

const Register = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <main>
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <input 
            type="text" 
            name="email" 
            id='email'
            placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className='button primary-button'>Create an account</button>
          <p>
             Already have an account?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register
