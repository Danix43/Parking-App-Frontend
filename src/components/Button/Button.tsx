import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  margin: .25rem;

  padding-left: .3rem;
  padding-right: .3rem;
  
  border-radius: 15px;
  
  &:hover {
    background-color: ${props => props.theme.body};
  }
`;

const Text = styled.p`
  margin-left: 1rem;
`;

type ButtonProps = {
  text: string;
  onClick: Function;
  img?: React.ReactElement | null;
};

function Button({ text, onClick, img }: ButtonProps) {
  const themeContext = useContext(ThemeContext);

  const handleClick = (_clickEvent: any) => {
    onClick();
  };

  return (
    <ButtonContainer onClick={handleClick} theme={themeContext}>
      {img}
      <Text>{text}</Text>
    </ButtonContainer>
  );
}

export default Button;
