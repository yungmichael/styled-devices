import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 1175px;
  height: 735px;
  background: #000;
  padding: 60px 40px;
  border-radius: 40px 40px 15px 15px / 40px 40px 35px 35px;
  box-shadow: inset 0px 0px 0px 3px #8d8d8f, inset 0px 0px 0px 6px #202022;
  position: relative;
  transform: scale(0.7);

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
    width: 1243.5px;
    height: 815px;
    height: 40px;
    top: 815px;
    content: "MacBook Pro";
    color: #a3a3a5;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding-top: 5px;
    font-size: large;
    background: #1d1d1d;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0px 0px 15px 15px / 0px 0px 35px 35px;
    z-index: 0;
  }
`;

const Screen = styled.div`
  background: url("");
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
  z-index: 1;

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
