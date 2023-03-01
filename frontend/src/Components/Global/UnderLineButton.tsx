import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

interface props {
  text: string;
  hoverColor: string;
  color: string;
  transparent: string;
}

const UnderLineButton: React.FC<props> = ({
  text,
  hoverColor,
  color,
  transparent,
}) => {
  return (
    <Button tansparent={transparent} color={color} hoverColor={hoverColor}>
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
  margin-bottom: 3px;
  margin-left: 3px;
  font-weight: 500;
  font-size: 17px;
  color: ${(props) => props.color};
`;

const Button = styled.div<{
  hoverColor: string;
  tansparent: string;
  color: string;
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.color};
  background-image: linear-gradient(
    transparent 0,
    transparent ${(props) => props.tansparent},
    ${(props) => props.hoverColor} 90%,
    ${(porps) => porps.hoverColor} 100%
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  background-position-x: left;
  width: fit-content;

  transition: all 650ms;

  :hover {
    background-size: 100% 100%;
    background-position-x: left;
  }
`;
