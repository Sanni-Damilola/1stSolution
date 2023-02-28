import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

interface props {
  text: string;
  hoverColor: string;
  color: string;
}

const UnderLineButton: React.FC<props> = ({ text, hoverColor, color }) => {
  return (
    <Button color={color} hoverColor={hoverColor}>
      {text}
      <Icon color={color}>
        <BiChevronRight />
      </Icon>
    </Button>
  );
};

export default UnderLineButton;
const Icon = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 3px;
  font-weight: 500;
  font-size: 17px;
  color: ${(props) => props.color};
`;

const Button = styled.div<{ hoverColor: string; color: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 400px;
  color: ${(props) => props.color};
  background-image: linear-gradient(
    transparent 0,
    transparent 90%,
    ${(props) => props.hoverColor} 90% ${(porps) => porps.hoverColor} 100%
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  background-position-x: left;

  transition: all 650ms;

  :hover {
    background-size: 100% 100%;
  }
`;
