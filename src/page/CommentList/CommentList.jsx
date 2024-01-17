import React from 'react';
import styled from 'styled-components';
import CommentListItem from '../../component/CommentListItem';

const Wrapper = styled.div`
  & > * {
    :not(:last-child) { margin-bottom: 16px; }
  }
`;

const CommentList = ({comments}) => {
  return (
    <Wrapper className="flex-fdc">
      {comments.map((comment, index) => {
        return (
          <CommentListItem
            key={comment.id}
            article={comment}
          />
        );
      })}
    </Wrapper>
  )
}

export default CommentList;