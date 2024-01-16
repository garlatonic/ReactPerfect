import React from 'react';
import styled from 'styled-components';
import ArticleListItem from '../../component/ArticleListItem';

const Wrapper = styled.div`
  & > * {
    :not(:last-child) { margin-bottom: 16px; }
  }
`;

const ArticleList = ({articles, onClickItem}) => {
  return (
    <Wrapper className="flex-fdc">
      {articles.map((article, index) => {
        return (
          <ArticleListItem
            key={article.id}
            article={article}
            onClick={onClickItem(article)}
          />
        );
      })}
    </Wrapper>
  )
}

export default ArticleList;