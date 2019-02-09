import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Content() {
  return (
    <Container>
      <div>
        <input type="radio" value="landscape" id="landscape" />
        <label for="landscape">Landscape</label>
      </div>
      <div>
        <input type="radio" value="vertical" id="vertical" checked />
        <label for="vertical">Vertical</label>
      </div>
    </Container>
  );
}
