import { BeatLoader } from "react-spinners";

import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, isErr } = useFetch(
    "http://localhost:8000/blogs"
  );

  if (blogs && blogs.length <= 0) {
    return (
      <div className="no-blogs">
        <h1>No blogs to display</h1>
      </div>
    );
  }
  return (
    <div className="home">
      {isErr && <div>{isErr}</div>}
      {isLoading && (
        <div className="centered">
          <BeatLoader />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs :-" />}
    </div>
  );
};

export default Home;
