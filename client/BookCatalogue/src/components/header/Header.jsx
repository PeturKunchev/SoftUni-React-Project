import { Link } from "react-router";
import './Header.css';
export default function Header (){
return (
     <>
     <header className="header">
        <h1><Link to="/"><img className="logo"src="/bookLogo.png" alt="Logo" /></Link></h1>
        <nav>

                        <div className="nav">
                            <Link to="/books">All Books</Link>
                            <Link to="/books/create">Add Your Book</Link>
                            <Link to="/logout">Logout</Link>
    
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
            </nav>
     </header>
     </>
     )
}