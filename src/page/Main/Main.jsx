import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../component/ui/Button';
import ArticleList from '../List';
import data from '../../data.json';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;


const Main = (props) => {
  const navigate = useNavigate();

  return (
    <Wrapper className="flex-fdc">
      <Container>
        <Button
          title="글 작성하기"
          onClick={navigate("/article-write")}
        />

        <ArticleList
          articles={data}
          onClickItem={(item) => {navigate(`/article/${item.id}`)}}
        />
      </Container>
    </Wrapper>
  )
}

export default Main