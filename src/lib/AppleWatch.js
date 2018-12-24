import React, { Component } from "react";

import styled from "styled-components";

const Device = styled.div`
  height: 234px;
  width: 200px;
  margin: auto;
  position: relative;
`;

const Screen = styled.div`
  background: #0d0d0d;
  border-radius: 40px;
  box-shadow: inset 0 0 2px 2px #9ea0a2, inset 0 0 0 6px #c0c1c2,
    inset 0 0 0 8px #e2e3e4;
  height: 100%;
  padding: 32px;
  position: relative;
  width: 100%;

  ::after {
    border-radius: 30px;
    box-shadow: inset 0 0 25px 0 rgba(255, 255, 255, 0.75);
    content: "";
    height: 95%;
    left: 8px;
    position: absolute;
    top: 8px;
    width: 94%;
  }
`;

const Wallpaper = styled.div`
  border-radius: 2px;
  height: 100%;
  width: 100%;
  background: #222;
`;

const Buttons = styled.div`
  background: #e2e3e4;
  border-left: 2px solid #adb0b3;
  border-radius: 8px 4px 4px 8px / 20px 4px 4px 20px;
  box-shadow: inset 0 0 2px 2px #adb0b3;
  height: 56px;
  position: absolute;
  right: -78px;
  top: 65px;
  width: 17px;
  z-index: 9;

  ::after {
    background: #e2e3e4;
    border-radius: 4px 2px 2px 4px / 10px 2px 2px 10px;
    box-shadow: inset 0 0 1px 2px #adb0b3;
    content: "";
    height: 75px;
    position: absolute;
    right: 9px;
    top: 88px;
    width: 8px;
  }
`;

class AppleWatch extends Component {
  render() {
    return (
      <Device>
        <Screen>
          <Wallpaper />
        </Screen>
        <Buttons />
      </Device>
    );
  }
}

export default AppleWatch;
