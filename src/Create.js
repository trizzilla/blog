import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setTitle("");
    setBody("");
    setAuthor("");

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("BLOG ADDED");
      setIsLoading(false);
      history.push("/");
    });
  };

  if (isLoading) {
    return (
      <div className="centered">
        <BeatLoader />
      </div>
    );
  }

  return (
    <div className="create">
      <h3>CREATE A NEW BLOG:</h3>
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description: </label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {/* <label>Written by: </label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="zP">zP</option>
            <option value="zT">zT</option>
            <option value="zL">zL</option>
          </select> */}
          <label>Written by: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button>Add blog</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
