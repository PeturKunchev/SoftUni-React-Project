import { Link, useNavigate  } from "react-router"
import "./Register.css"
import { useRegister } from "../../api/authApi.js";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.js";
export default function Register (){
    const navigate = useNavigate();
    const {register} = useRegister();
    const {userLoginHandler} = useContext(UserContext);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      rePassword: "",
  });
    const [error, setError] = useState("");
    const registerHandler = async (formData) =>{
        const {email,password} = Object.fromEntries(formData);
        const rePassword = formData.get('rePassword');
        setFormData({email,password,rePassword});
        
        if (password!==rePassword) {
          setError("Password missmatch!")            
          return;
        }
        if (password.length < 5) {
          setError("Password must be at least 5 characters long!");
          return;
      }
        try {
          const authData = await register(email, password);
          userLoginHandler(authData);
          navigate('/');
      } catch (error) {        
          if (error.status === 400) {
            setError(error.message)
          } else {
            setError("Something went wrong. Please try again later.");
          }
      }
    }
return (
     <>
     <div className="register-container">
      <h2>Register</h2>
      <form action={registerHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required defaultValue={formData.email}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required defaultValue={formData.password}/>
        </div>

        <div className="form-group">
          <label htmlFor="rePassword">Re-enter Password</label>
          <input type="password" id="rePassword" name="rePassword" placeholder="Re-enter your password" required defaultValue={formData.rePassword}/>
        </div>

        <button type="submit">Register</button>
        <span id='span'>If you already have a profile click <Link to="/login">here</Link></span>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
     </>
     )
}