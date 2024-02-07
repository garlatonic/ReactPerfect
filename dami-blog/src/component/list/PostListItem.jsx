import React from "react";

function PostListItem(props) {
  const { post, onClick } = props;

  const wrapperStyle = {
    width: 'calc(100% - 32px)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    border: '1px solid grey',
    borderRadius: '8px',
    cursor: 'pointer',
    background: 'white',
    transition: 'background 0.3s',
  };

  const titleTextStyle = {
    fontSize: '20px',
    fontWeight: '500',
  };

  return (
    <div
      style={wrapperStyle}
      onClick={onClick}
    >
      <p style={titleTextStyle}>{post.title}</p>
    </div>
  );
}

export default PostListItem;