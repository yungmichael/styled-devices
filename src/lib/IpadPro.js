import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 435px;
  height: 620px;
  background: #0e0e0e;
  padding: 23px;
  border-radius: 40px;
  box-shadow: inset 0px 0px 0px 1px #dcdcdc, inset 0px 0px 0px 2px #fefefe,
    inset 0px 0px 0px 3px #dcdcdc, inset 0px 0px 0px 4px #cdcdcd;
  position: relative;
  transform: scale(1);
`;

const Screen = styled.div`
  background: url("https://cdn.wccftech.com/wp-content/uploads/2018/07/iPad-Pro-5K-wallpaper-gallery-1-1109x1480.jpg");
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  border-radius: 10px;
`;

const Buttons = styled.div`
  position: absolute;
  height: 35px;
  width: 3px;
  right: -3px;
  top: 50px;
  background: #eee;
  border-radius: 0px 5px 5px 0px;
  box-shadow: inset 0px 9px 3px -6px #444, inset 0px -9px 3px -6px #444;

  ::after {
    content: "";
    position: absolute;
    height: 35px;
    width: 3px;
    top: 50px;
    background: #eee;
    border-radius: 0px 5px 5px 0px;
    box-shadow: inset 0px 9px 3px -6px #444, inset 0px -9px 3px -6px #444;
  }
`;

class IpadPro extends Component {
  render() {
    return (
      <Case>
        <Screen />
        <Buttons />
      </Case>
    );
  }
}

export default IpadPro;
