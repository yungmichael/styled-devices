import React, { Component } from "react";

import styled from "styled-components";

const Screen = styled.div`
  width: 624px;
  height: 428px;
  background: #111;
  border-radius: 18px;
  position: relative;

  ::after {
    background: #f2f2f2;
    border-radius: 0 0 16px 16px;
    bottom: -10px;
    content: "";
    height: 64px;
    left: 0px;
    position: absolute;
    width: 620px;
    border: 2px solid #cdcdcd;
  }
`;

const Wallpaper = styled.div`
  width: 576px;
  height: 324px;
  background: url("https://picturepan2.github.io/devices.css/src/img/bg-08.jpg");
  background-size: cover;
  position: relative;
  top: 24px;
  left: 24px;
  border-radius: 2px;
  border: 2px solid #121212;
`;

const Bottom = styled.div`
  border-bottom: 60px solid #f2f2f2;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  position: relative;
  top: 110px;
  margin: auto;
  width: 110px;

  ::after {
    background: #d2d2d2;
    border-radius: 2px;
    height: 6px;
    margin: 0 auto;
    position: relative;
    width: 180px;
    content: "";
    display: block;
    top: 60px;
    left: -35px;
  }
`;

class Imac extends Component {
  render() {
    return (
      <Screen>
        <Wallpaper />
        <Bottom />
      </Screen>
    );
  }
}

export default Imac;
