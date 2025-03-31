import Map from "../map/Map";
import "./About.css"
export default function About() {

  return (
    <>
    <div className="about-container">
      <h1>About Our Book Catalogue</h1>
      <p>
        Welcome to our Book Catalogue! Discover a vast collection of books across different genres, 
        from timeless classics to modern bestsellers. Whether you're a casual reader or a book enthusiast, 
        we have something for everyone.
      </p>
      <p>
        Our mission is to make it easy for readers to explore and find their next favorite book. 
        Start browsing now and enjoy the world of literature!
      </p>
      <h4>
        Visit our store:
      </h4>
    <Map />
    If the map is not loading please reload the page :)
    </div>
    </>
  );
}