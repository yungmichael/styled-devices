import React from "react";
import styled from "styled-components";
import { theme } from "../../../utils/theme";

const BackgorundsListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: ${theme.text_color_secondary};
  font-weight: bold;
`;

export default function Title(props) {
  const { title, btn } = props;
  return (
    <BackgorundsListHeader>
      {title}
      {btn || null}
    </BackgorundsListHeader>
  );
}
