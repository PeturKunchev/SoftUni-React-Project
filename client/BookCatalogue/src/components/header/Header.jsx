import { Link } from "react-router";
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
export default function Header (){
    const { email } = useContext(UserContext);    
return (
     <>
     <header className="header">
        <nav>

                        <div className="nav">

                            <h1><Link to="/"><img className="logo"src="/bookLogo.png" alt="Logo" /></Link></h1>
                            <Link to="/about">About</Link>
                            <Link to="/books">All Books</Link>
                            {email ? (<div className="nav2">
                            <Link to="/books/create">Add Your Book</Link>
                            <Link to="/logout">Logout</Link>
                            </div>)
                            :(<div className="nav2">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </div>)}
                            {email}
                        </div>
            </nav>
     </header>
     </>
     )
}