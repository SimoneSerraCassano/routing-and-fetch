import React from "react";

function Post({ url, title }) {
  return (
    <div className="Post">
      <img src={url} alt={title} />
      {title}
    </div>
  );
}

export default Post;
