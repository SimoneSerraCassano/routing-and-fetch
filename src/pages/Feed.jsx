import React from "react";
import Post from "../components/Post";
import { Loader } from "rsuite";
import useAxios from "../hooks/useAxios";

const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

function Feed() {
  const { data: posts, error, isLoading } = useAxios(url);

  return (
    <div className="Feed">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} title={post.title} url={post.thumbnailUrl} />
        ))}
      {error && "C'è stato un errore"}
      {isLoading && <Loader size="md" />}
    </div>
  );
}

export default Feed;
