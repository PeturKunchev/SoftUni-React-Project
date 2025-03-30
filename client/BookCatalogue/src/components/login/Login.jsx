import React, { useContext, useState } from 'react';
import './Login.css';  
import { Link, useNavigate } from 'react-router';
import { UserContext } from '../../contexts/UserContext.js';
import { useLogin } from '../../api/authApi.js';

export default function Login() {
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext);
    const {login} = useLogin();
    const [formData, setFormData] = useState({
          email: "",
          password: "",
      });
    const [error, setError] = useState("");
    const loginHandler = async (formData) =>{
        const {email,password} = Object.fromEntries(formData);
        
        
        setFormData({email,password});
        try {
          const authData = await login(email,password);
          userLoginHandler(authData);
          navigate('/');
        } catch (error) {
          if (error.status === 400) {
            setError(error.message);
        } else {
            setError("Something went wrong. Please try again later.");
        }
        }

    }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form  action={loginHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required defaultValue={formData.email}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required/>
        </div>

        <button type="submit">Login</button>
        <span id='span'>If you don't have a profile click <Link to="/register">here</Link></span>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}