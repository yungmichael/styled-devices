import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 407px;
  height: 825px;
  background: #000;
  padding: 28px;
  border-radius: 60px;
  box-shadow: inset 0px 0px 0px 2px #000, inset 0px 0px 0px 6px #e4e4e4,
    inset 0px 0px 0px 7px #000, inset 5px 0px 1px 6px #2f2f2f,
    inset -5px 0px 1px 5px #2f2f2e, inset 1px 0px 0px 10px #5c5c5c,
    inset 0px 0px 0px 12px #000, inset 10px 0px 3px 6px #afafaf,
    inset 10px 3px 8px #7b7b7b, inset 10px 0px 3px 9px #585858,
    inset -10px 0px 3px 6px #afafaf, inset -10px 3px 8px #7b7b78,
    inset -10px 0px 3px 9px #585858, inset -20px 0px 13px 11px #0f0f0f,
    inset 20px 0px 7px 11px #0f0f0f, inset 0px 0px 0px 19px #636363;
  display: relative;
`;

const Screen = styled.div`
  background: #d7004e;
  height: 100%;
  width: 100%;
  border-radius: 35px;
  position: relative;
`;

const Notch = styled.div`
  position: absolute;
  width: 210px;
  height: 30px;
  background: #000;
  content: "";
  right: 50%;
  transform: translateX(50%);
  border-radius: 0 0 25px 25px;

  ::before {
    content: "";
    position: absolute;
    width: 42px;
    height: 9px;
    background: #222;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

class IphoneX extends Component {
  render() {
    return (
      <Case>
        <Screen>
          <Notch />
        </Screen>
      </Case>
    );
  }
}

export default IphoneX;
