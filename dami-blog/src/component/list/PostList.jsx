import React from "react";
import PostListItem from "./PostListItem";

function PostList(props) {
  const { posts, onClickItem } = props;

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  const listItemStyle = {
    width: '100%',
    marginBottom: '16px',
  };

  return (
    <div style={wrapperStyle}>
      {posts.map((post) => (
        <div key={post.id} style={listItemStyle}>
          <PostListItem
            post={post}
            onClick={() => onClickItem(post)}
          />
        </div>
      ))}
    </div>
  );
}

export default PostList;