import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};

export { Button };
