import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  :hover {
    border-color: #7df600;
    box-shadow: 0 0 5px #7df600;
  }
  `;
  
const TitleText = styled.h3`
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const ArticleListItem = ({article, onClick}) => {
  return (
    <Wrapper
      className="flex-fdc"
      onClick={onClick}
    >
      <TitleText>{article.title}</TitleText>
    </Wrapper>
  )
}

export default ArticleListItem;