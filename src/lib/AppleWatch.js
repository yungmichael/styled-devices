import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 210px;
  height: 250px;
  background: #ececec;
  border-radius: 40px;
  padding: 10px;
  box-shadow: inset 0px 0px 3px 3px #b2b2b2;
  position: relative;
`;

const Screen = styled.div`
  height: 100%;
  width: 100%;
  background: #060606;
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 1px #333, inset 54px 0px 40px -40px #737373,
    inset -5px -5px 5px -1px #9a9a9a;
  position: relative;

  ::before {
    content: "";
    top: 1px;
    height: 15px;
    width: 170px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    background: #5d5d5d;
    border-radius: 10px 10px 20px 20px / 4px 4px 12px 12px;
    box-shadow: inset 0px 5px 7px 0px #b0b0b0, inset 0px -1px 5px 2px #3c3c3c;
  }
`;

const Buttons = styled.div`
  position: absolute;
  height: 100px;
  width: 3px;
  right: -3.5px;
  top: 200px;
  background: #fff;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #5f5f5f;
  border-left: 1px solid #000;
  box-shadow: inset 0px 3px 2px 0px #333, inset 0px -3px 2px 0px #333;
`;

class AppleWatch extends Component {
  render() {
    return (
      <Case>
        <Screen />
        <Buttons />
      </Case>
    );
  }
}

export default AppleWatch;
