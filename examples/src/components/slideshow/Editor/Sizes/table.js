import React from "react";
import styled from "styled-components";
import { theme } from "../../../../utils/theme";

const Container = styled.div``;

const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`;

const Size = styled.div`
  height: 30px;
  background: ${theme.color_secondary};
  color: ${theme.color_white};
  text-align: center;
  font-size: 14px;
`;

const Value = styled.input``;

export default function Table() {
  return (
    <Container>
      <Row>
        <Size>340 px</Size>
        <Value value="0.5" />
      </Row>
      <Row>
        <Size>560 px</Size>
        <Value value="0.7" />
      </Row>
      <Row>
        <Size>930 px</Size>
        <Value value="0.8" />
      </Row>
    </Container>
  );
}
