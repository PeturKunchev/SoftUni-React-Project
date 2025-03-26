import { Link } from "react-router";
import './Header.css';
export default function Header (){
return (
     <>
     <header className="header">
        <nav>

                        <div className="nav">
                            <h1><Link to="/"><img className="logo"src="/bookLogo.png" alt="Logo" /></Link></h1>
                            <Link to="/books">All Books</Link>
                            <Link to="/books/create">Add Your Book</Link>
                            <Link to="/logout">Logout</Link>
    
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/about">About</Link>
                        </div>
            </nav>
     </header>
     </>
     )
}