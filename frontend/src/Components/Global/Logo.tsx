import React from "react";
import styled from "styled-components";
interface props {
  image: string;
  height: string;
}

const Logo: React.FC<props> = ({ image, height }) => {
  return (
    <>
      <Image height={height} src={image} />;
    </>
  );
};

export default Logo;

const Image = styled.img<{ height: string }>`
  height: ${(props) => props.height};
`;
