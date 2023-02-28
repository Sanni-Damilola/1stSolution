import React from "react";
import styled from "styled-components";
import appIcon from "../../Image/apple-icon.svg"

const ButtonLinkToApp = () => {
  return (
    <Button>
      <Icon />

      <Text>Get on iPhone</Text>
    </Button>
  );
};

export default ButtonLinkToApp;

const Button = styled.div``;
const Icon = styled.img``;
const Text = styled.div``;
