import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  :hover {
    background: #7df600;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

const CommentListItem = ({comment}) => {
  return (
    <Wrapper className="flex-fdc">
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  )
}

export default CommentListItem;