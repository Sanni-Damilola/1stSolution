import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

interface props {
  text: string;
  hoverColor: string;
  color: string;
}

const UnderLineButton: React.FC<props> = ({text, hoverColor, color}) => {
  return <Button>
    {text}
    <Icon>
      <BiChevronRight />
    </Icon>
    </Button>;
};

export default UnderLineButton;
const Icon = styled.div`
  
`

const Button = styled.div`
  
`
