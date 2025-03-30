import { Link } from "react-router";
import "./Error.css"
export default function Error() {
  return (
    <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="not-found-link">Go Back Home</Link>
        </div>
  );
}