import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>#404 PAGE NOT FOUND :(</h2>
      <p>
        Are you really sure about that link? or you can go back to
        <Link to="/"> our home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
