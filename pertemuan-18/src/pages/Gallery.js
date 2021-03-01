import axios from "axios";
import { useEffect, useState } from "react";

function Gallery() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  // useEffect(() => {
  //   console.log("tes jalan");

  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   fetch(url).then((response) => console.log(response));
  //   // .then((result) => setPosts(result));
  // }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((response) => console.log(response));
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      <h1>gallery</h1>
      <div>
        {posts.map((item, id) => (
          <div key={id}>
            <p>title: {item.title}</p>
            <p>body: {item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
