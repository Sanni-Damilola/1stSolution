import React from "react";
import styled from "styled-components";
interface props {
  Image: string;
  height: string;
}

const Logo: React.FC<props> = ({ Image, height }) => {
  return (
    <>
      <Image  />;
    </>
  );
};

export default Logo;

const Image = styled.img<{ height: string }>`
  height: ${(props) => props.height};
`;
