import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>ZZZS BLOG</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/about">About us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
