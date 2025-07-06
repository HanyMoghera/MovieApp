import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { getPopularMovies } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {
  const { setMovies, setSearchQuery, setIsSearching } = useMovieContext();

  const handleHomeClick = async () => {
    try {
      const popular = await getPopularMovies();
      setMovies(popular);
      setSearchQuery("");
      setIsSearching(false);
    } catch (err) {
      console.error("Failed to load popular movies from NavBar.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={handleHomeClick}>Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
