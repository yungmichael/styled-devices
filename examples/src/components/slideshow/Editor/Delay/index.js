import React from "react";
import styled from "styled-components";
import Title from "../Title";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

export default function Delay() {
  return (
    <Container>
      <Title title="Delay" />
    </Container>
  );
}
