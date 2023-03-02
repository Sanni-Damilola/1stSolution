import React from "react";
import styled from "styled-components";

interface props {
  icon: any;
  text: string;
  displayIcon: string;
  bg: string;
  color: string;
  padding: string;
  paddingleft: string;
}

const SideBarProps: React.FC<props> = ({
  text,
  icon,
  bg,
  displayIcon,
  color,
  padding,
  paddingleft,
}) => {
  return (
    <Button paddingLeft={paddingleft}>
      <Icon displayIcon={displayIcon}>{icon}</Icon>
      <Text bg={bg} color={color} padding={padding}>
        {text}
      </Text>
    </Button>
  );
};

export default SideBarProps;

const Button = styled.div<{ paddingLeft: string }>`
  display: flex;
  padding-left: ${({ paddingLeft }) => (paddingLeft ? "40px" : "20px")};
  margin-top: 40px;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
`;
const Icon = styled.div<{ displayIcon: string }>`
  display: ${({ displayIcon }) => (displayIcon ? "flex" : "none")};
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
