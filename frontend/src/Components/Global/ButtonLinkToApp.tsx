import React from "react";
import styled from "styled-components";

interface props {
  padding: string;
  image: string;
  text: string;
  HoverBorderValue: string;
  marginTopValue: string;
}

const ButtonLinkToApp: React.FC<props> = ({
  padding,
  image,
  text,
  HoverBorderValue,
  marginTopValue,
}) => {
  return (
    <Button
      border={HoverBorderValue}
      marginTop={marginTopValue}
      padding={padding}
    >
      <Icon src={image} />
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonLinkToApp;

const Button = styled.div<{
  padding: string;
  marginTop: string;
  border: string;
}>`
  padding: ${(props) => props.padding};
  border: 1px solid rgb(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 15px;
  transition: all 360ms;
  color: rgb(12, 24, 37);
  background-color: white;
  font-size: 15px;
  font-weight: 500;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  :hover {
    margin-top: ${({ marginTop }) => (marginTop ? "-10px" : "")};
    border: ${({ border }) => (border ? "1px" : "0")} solid rgb(0, 0, 0, 0.2);
  }
`;
const Icon = styled.img`
  margin-right: 6px;
  margin-bottom: 3px;
`;
const Text = styled.div``;
