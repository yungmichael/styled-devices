import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: inherit;
`;

const AppleWatch = styled.div`
  height: 234px;
  width: 200px;
  position: relative;
`;

const Frame = styled.div`
  background: #0d0d0d;
  border-radius: 40px;
  box-shadow: inset 0 0 2px 2px #000, inset 0 0 0 6px #e2e3e4,
    inset 0 0 0 8px #e2e3e4;
  height: 234px;
  padding: 32px;
  position: relative;
  width: 200px;

  ::after {
    border-radius: 30px;
    box-shadow: inset 0 0 25px 0 rgba(255, 255, 255, 0.75);
    content: "";
    height: 216px;
    left: 9px;
    position: absolute;
    top: 9px;
    width: 182px;
  }
`;

const Content = styled.div`
  border: 2px solid #333;
  border-radius: 2px;
  height: 170px;
  width: 136px;
`;

const Buttons = styled.div`
  background: #e2e3e4;
  border-left: 2px solid #000;
  border-radius: 8px 4px 4px 8px / 20px 4px 4px 20px;
  box-shadow: inset 0 0 2px 2px #000;
  height: 44px;
  position: absolute;
  right: -10px;
  top: 52px;
  width: 16px;
  z-index: 9;

  ::after {
    background: #e2e3e4;
    border-radius: 4px 2px 2px 4px / 10px 2px 2px 10px;
    box-shadow: inset 0 0 1px 2px #000;
    content: "";
    height: 66px;
    right: 6px;
    position: absolute;
    top: 68px;
    width: 8px;
  }

  ::before {
    background: #000;
    box-shadow: 0 -16px #000, 0 -12px #000, 0 -8px #000, 0 -4px #000, 0 4px #000,
      0 8px #000, 0 12px #000, 0 16px #000;
    content: "";
    height: 2px;
    margin-top: -1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 6px;
  }
`;

class Iphone8 extends Component {
  render() {
    return (
      <Container>
        <AppleWatch>
          <Frame>
            <Content />
          </Frame>
          <Buttons />
        </AppleWatch>
      </Container>
    );
  }
}

export default Iphone8;
