import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 407px;
  height: 825px;
  background: #333;
  padding: 28px;
  border-radius: 60px;

  transform: scale(0.8);
`;

const Screen = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
  border-radius: 35px;
`;

class IphoneX extends Component {
  render() {
    return (
      <Case>
        <Screen />
      </Case>
    );
  }
}

export default IphoneX;
