import { useHistory, useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isErr } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog-details">
      {isLoading && (
        <div className="centered">
          <BeatLoader />
        </div>
      )}
      {isErr && <h1>{isErr}</h1>}
      {blog && (
        <article>
          <h2
            style={{
              alignItems: "center",
            }}
          >
            {blog.title}
          </h2>
          <p>Written by: {blog.author}</p>
          <p
            style={{
              alignItems: "center",
            }}
          >
            {blog.body}
          </p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
