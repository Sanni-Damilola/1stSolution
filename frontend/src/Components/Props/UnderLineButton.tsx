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
    <Button>
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

const Button = styled.div`
  display: flex;
  align-items: center;
`;
