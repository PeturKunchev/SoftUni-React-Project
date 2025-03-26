import { Link, useNavigate  } from "react-router"
import "./Register.css"
import { useRegister } from "../../api/authApi.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
export default function Register (){
    const navigate = useNavigate();
    const {register} = useRegister();
    const {userLoginHandler} = useContext(UserContext);

    const registerHandler = async (formData) =>{
        const {email,password} = Object.fromEntries(formData);

        const rePassword = formData.get('rePassword');

        if (password!==rePassword) {
            console.log("Password missmatch!");
            return;
        }
        const authData = await register(email,password);
        
        userLoginHandler(authData);
        navigate('/');
    }

return (
     <>
     <div className="register-container">
      <h2>Register</h2>
      <form action={registerHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>

        <div className="form-group">
          <label htmlFor="rePassword">Re-enter Password</label>
          <input type="password" id="rePassword" name="rePassword" placeholder="Re-enter your password" required />
        </div>

        <button type="submit">Register</button>
        <span id='span'>If you already have a profile click <Link to="/login">here</Link></span>
      </form>
    </div>
     </>
     )
}