
import { Link  } from "react-router"
import "./Register.css"
export default function Register (){
return (
     <>
     <div className="register-container">
      <h2>Register</h2>
      <form>
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