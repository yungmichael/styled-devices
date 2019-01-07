import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 407px;
  height: 825px;
  background: #000;
  padding: 28px;
  border-radius: 60px;
  box-shadow: inset 0px 0px 0px 2px #000, inset 0px 0px 0px 6px #e4e4e4,
    inset 0px 0px 0px 7px #000, inset 0px 0px 0px 10px #5c5c5c,
    inset 0px 0px 0px 11px #000, inset 10px 0px 3px 6px #afafaf,
    inset 10px 3px 8px #7b7b7b, inset 10px 0px 3px 9px #585858,
    inset -10px 0px 3px 6px #afafaf, inset -10px 3px 8px #7b7b7b,
    inset -10px 0px 3px 9px #585858;
`;

const Screen = styled.div`
  background: #d7004e;
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
