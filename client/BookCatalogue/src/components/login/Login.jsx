import React from 'react';
import './Login.css';  
import { Link } from 'react-router';

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>

        <button type="submit">Login</button>
        <span id='span'>If you don't have profile click <Link to="/register">here</Link></span>
      </form>
    </div>
  );
}