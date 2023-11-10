import "./Post.css";
import { PiHeart } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { PiPaperPlaneRight } from "react-icons/pi";
import { PiChatCircle } from "react-icons/pi";
import { IconButton } from "rsuite";
import { useState } from "react";

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  const likeIcon = isLiked ? <PiHeartFill fill="red" /> : <PiHeart />;

  return (
    <div className="Post">
      <img src={post.url} alt={post.title} />
      <div className="like-bar">
        <IconButton
          size="lg"
          icon={likeIcon}
          onClick={() => setIsLiked((liked) => !liked)}
        />
        <IconButton
          size="lg"
          icon={<PiChatCircle />}
          onClick={() => console.log("Commenta questo post: " + post.url)}
        />
        <IconButton
          size="lg"
          icon={<PiPaperPlaneRight />}
          onClick={() => console.log("Condividi questo post: " + post.url)}
        />
      </div>
      <div className="content">
        <span className="album">Album </span>
        {post.title}
      </div>
    </div>
  );
}

export default Post;
