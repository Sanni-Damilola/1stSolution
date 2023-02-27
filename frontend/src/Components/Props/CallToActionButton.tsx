import React from "react";
import styled from "styled-components";

interface props {
  padding: string;
}

const CallToActionButton: React.FC<props> = ({ padding }) => {
  return <Button padding={padding}>CallToActionButton</Button>;
};

export default CallToActionButton;

const Button = styled.div<{ padding: string }>`
  border-radius: 9px;
  border: 0;
  outline: none;
  background-color: rgb(12, 24, 37);
  transition: all 360ms;
  color: white;
  padding: ${(props) => props.padding};
  font-style: normal;
  font-weight: 600;
  font-size: 16.5px;
  cursor: pointer;
  :hover {
    background-color: rgb(13, 96, 216);
  }
`;
