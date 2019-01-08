import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 210px;
  height: 250px;
  background: #ececec;
  border-radius: 40px;
  padding: 10px;
  box-shadow: inset 0px 0px 3px 3px #b2b2b2;
`;

const Screen = styled.div`
  height: 100%;
  width: 100%;
  background: #060606;
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 1px #333, inset 54px 0px 40px -40px #737373,
    inset -5px -5px 5px -1px #9a9a9a;
`;

const Wallpaper = styled.div``;

const Buttons = styled.div``;

class AppleWatch extends Component {
  render() {
    return (
      <Case>
        <Screen>
          <Wallpaper />
        </Screen>
        <Buttons />
      </Case>
    );
  }
}

export default AppleWatch;
