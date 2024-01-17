import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({title, onClick}) => {
  return (
    <StyledButton
      onClick={onClick}
    >
      {title || "button"}
    </StyledButton>
  )
}

export default Button;