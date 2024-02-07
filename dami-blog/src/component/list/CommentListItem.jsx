import React from "react";

function CommentListItem(props) {
  const { comment } = props;

  const wrapperStyle = {
    width: 'calc(100% - 32px)',
    padding: '8px 16px',
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

  const contentTextStyle = {
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={wrapperStyle} >
      <p style={contentTextStyle}>{comment.content}</p>
    </div>
  );
}

export default CommentListItem;