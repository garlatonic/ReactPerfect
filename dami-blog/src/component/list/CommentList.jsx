import React from "react";
import CommentListItem from "./CommentListItem";

function CommentList(props) {
  const { comments } = props;

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  };

  const listItemStyle = {
    marginBottom: '16px'
  };

  return (
    <div style={wrapperStyle}>
      {comments.map((comment, index) => (
        <div key={comment.id} style={index !== comments.length - 1 ? listItemStyle : null}>
          <CommentListItem comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default CommentList;