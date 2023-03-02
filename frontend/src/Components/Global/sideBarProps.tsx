import React from "react";
import styled from "styled-components";

interface props {
  icon: any;
  text: string;
  display: string;
  bg: string;
  color: string;
  padding: string;
}

const SideBarProps: React.FC<props> = ({
  text,
  icon,
  bg,
  display,
  color,
  padding,
}) => {
  return (
    <Button>
      <Icon display={display}>{icon}</Icon>
      <Text bg={bg} color={color} padding={padding}>
        {text}
      </Text>
    </Button>
  );
};

export default SideBarProps;

const Button = styled.div`
  display: flex;
  padding-left: 40px;
  margin-top: 40px;
`;
const Icon = styled.div<{ display: string }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 3px;
  font-size: 25px;
`;
const Text = styled.div<{ padding: string; bg: string; color: string }>`
  color: ${({ color }) => (color ? "rgb(8, 62, 158)" : "white")};
  background-color: ${({ bg }) => (bg ? "white" : "transparent")};
  padding: ${({ padding }) => (padding ? "3px 40px 3px 20px" : "0")};
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  border-radius: 7px 7px 7px 0px;
`;
