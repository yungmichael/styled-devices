import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 1175px;
  height: 735px;
  background: #000;
  padding: 60px 40px;
  border-radius: 40px;
  box-shadow: inset 0px 0px 0px 4px #8d8d8f, inset 0px 0px 0px 8px #202022;
  position: relative;
  transform: scale(0.6);

  ::before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    background: #555;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  ::after {
    position: absolute;
    width: 100%;
    height: 815px;
    height: 10px;
  }
`;

const Screen = styled.div`
  background: url("http://cdn.osxdaily.com/wp-content/uploads/2017/11/iphone-x-screenshot.jpg");
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
`;

const Keyboard = styled.div`
  height: 30px;
  width: 1540px;
  background: #d1d2d7;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px 3px 0px 0px;
  box-shadow: inset 17px 0px 15px -8px #2b2c32,
    inset -17px 0px 15px -8px #2b2c32, inset 42px 0px 15px -6px #b2b3b8,
    inset -42px 0px 15px -5px #b2b3b8, inset 125px 0px 60px -60px #58595d,
    inset -125px 0px 60px -60px #58595d;

  ::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 250px;
    background: #b9bbbf;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0px 0px 25px 25px;
    box-shadow: inset 0px -2px 7px 1px #8b8c91, inset 0px 3px 10px 1px #3e3f43;
  }

  ::after {
    position: absolute;
    content: "";
    height: 25px;
    width: 100%;
    top: 30px;
    background: #717277;
    border-radius: 0px 0px 160px 160px / 0px 0px 25px 25px;
    box-shadow: inset 0px -7px 18px -3px #1c1c1e;
  }
`;

class MacbookPro extends Component {
  render() {
    return (
      <Case>
        <Screen />
        <Keyboard />
      </Case>
    );
  }
}

export default MacbookPro;
