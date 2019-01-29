import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const Circle = styled.div`
  height: 60px;
  width: 60px;
  background: #82bfdd;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 60px;
  display: grid;
  align-items: center;
  cursor: pointer;

  > svg {
    margin-left: 20px;
  }
`;

export default class RightArrow extends Component {
  render() {
    return (
      <Circle>
        <FontAwesomeIcon icon="angle-right" />
      </Circle>
    );
  }
}
