import React from "react";
import styled from "styled-components";
import { theme } from "../../../../utils/theme";

const Button = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${theme.color_green};
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

export default function AddSizeButton(props) {
  return <Button onClick={props.handleClick}>{props.title}</Button>;
}
