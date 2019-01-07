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

  box-shadow: inset 0 0 0 0.1em #bdbdbd, inset 0 0 0.2em 0.2em #bebebe,
    inset 0 0.3em 0.3em 0.4em #070707, inset 0 -0.3em 0.1em 0.1em #070707,
    inset 0 0 0 0.9em #fff, inset 0 0 0 1.05em #313131,
    inset 3.5em -0.5em 2em -2em #a4a4a4, inset -1.2em -0em 0.5em 0em #a4a4a4,
    inset -0.4em -1.1em 0.5em 0em #a4a4a4;
  height: 100%;
  padding: 32px;
  position: relative;
  width: 100%;

  ::after {
    border-radius: 30px;
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
    content: "";
    height: 75px;
    position: absolute;
    right: 8px;
    top: 88px;
    box-shadow: inset 0 0 2px 2px #adb0b3;
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
