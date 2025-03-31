import { Link } from "react-router";
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
export default function Header (){
    const {_id, email } = useContext(UserContext);    
return (
     <>
     <header className="header">
        <nav>

                        <div className="nav">

                            <h1><Link to="/"><img className="logo"src="/bookLogo.png" alt="Logo" /></Link></h1>
                            <Link to="/about">About</Link>
                            <Link to="/books">All Books</Link>
                            {email ? (<>
                            <Link to="/books/create">Add Your Book</Link>
                            <Link to={`/${_id}/profile`}>Profile</Link>
                            <Link to="/logout">Logout</Link>
                            </>)
                            :(<>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </>)}
                            <Link to={`/${_id}/profile`}><h4 className="emailHolder">{email}</h4></Link>
                        </div>
            </nav>
     </header>
     </>
     )
}