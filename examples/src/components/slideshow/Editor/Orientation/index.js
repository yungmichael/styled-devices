import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Content from "./content";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

export default function Orientation() {
  return (
    <Container>
      <Title title="Orientation" />
      <Content />
    </Container>
  );
}
