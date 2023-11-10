import Post from "components/Post/Post";
import { Loader } from "rsuite";
import useAxios from "hooks/useAxios";
import { feedUrl } from "utils/constants";
import "./Feed.css";

function Feed() {
  const { data: posts, error, isLoading } = useAxios(feedUrl);

  return (
    <div className="Feed">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      {error && "C'è stato un errore"}
      {isLoading && <Loader size="md" />}
    </div>
  );
}

export default Feed;
