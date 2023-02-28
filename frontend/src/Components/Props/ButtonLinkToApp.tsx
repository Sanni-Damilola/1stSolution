import React from "react";
import styled from "styled-components";

interface props {
  padding: string;
  image: string;
  text: string;
}

const ButtonLinkToApp: React.FC<props> = ({ padding, image, text }) => {
  return (
    <Button padding={padding}>
      <Icon src={image} />
      <Text>
        {text}
      </Text>
    </Button>
  );
};

export default ButtonLinkToApp;

const Button = styled.div<{ padding: string }>`
  padding: ${(props) => props.padding};
  border: 1px solid rgb(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 15px;
  transition: all 360ms;
  color: rgb(12, 24, 37);
  background-color: white;
  font-size: 16.5px;
  font-weight: 500;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    margin-top: -2px;
  }
`;
const Icon = styled.img`
  margin-right: 6px;
  margin-bottom: 3px;
`;
const Text = styled.div``;
