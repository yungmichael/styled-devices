import React from "react";
import styled from "styled-components";
import { theme } from "../../../../utils/theme";
import { sizes, sizesArray } from "../../../../utils/screenSizes";

const Container = styled.div``;

const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`;

const Size = styled.div`
  height: 34px;
  background: ${theme.color_secondary};
  color: ${theme.color_white};
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  border: 1px solid ${theme.color_white};
  border-right: none;
`;

const Value = styled.input`
  width: 100%;
  padding: 8px 16px;
  background: ${theme.color_white};
  list-style: none;
  font-size: 14px;
  border: 1px solid ${theme.text_color_grey};
  z-index: 0;

  :focus {
    outline: none;
  }
`;

export default function Table(props) {
  return (
    <Container>
      {props.sizes.reverse().map((val, i) => (
        <Row>
          <Size>{sizesArray[i]} px</Size>
          <Value value={val} />
        </Row>
      ))}
    </Container>
  );
}
