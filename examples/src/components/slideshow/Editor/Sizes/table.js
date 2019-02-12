import React from "react";
import styled from "styled-components";
import { theme } from "../../../../utils/theme";
import { sizes, sizesArray } from "../../../../utils/screenSizes";

const Container = styled.div``;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const ValueWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 38px;
  background: ${theme.color_white};
  list-style: none;
  align-items: center;
  border: 1px solid ${theme.text_color_grey};
`;

const Size = styled.div`
  height: 28px;
  background: ${theme.color_secondary};
  color: ${theme.color_white};
  text-align: center;
  font-size: 14px;
  line-height: 28px;
  border: 1px solid ${theme.color_white};
  border-right: none;
  margin: 0 7px;
  padding: 0 10px;
  border-radius: 8px;
`;

const Value = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  z-index: 0;
  background: ${theme.color_white};
  border: none;

  :focus {
    outline: none;
  }
`;

export default function Table(props) {
  return (
    <Container>
      {props.sizes.reverse().map((val, i) => (
        <Row>
          <ValueWrapper>
            <Size>{sizesArray[i]} px</Size>
            <Value value={val} />
          </ValueWrapper>
        </Row>
      ))}
    </Container>
  );
}
