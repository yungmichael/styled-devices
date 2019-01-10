import React, { Component } from "react";

import styled from "styled-components";

const Case = styled.div`
  width: 435px;
  height: 620px;
  background: #0e0e0e;
  padding: 23px;
  border-radius: 40px;
  box-shadow: inset 0px 0px 0px 3px #8d8d8f, inset 0px 0px 0px 6px #202022;
  position: relative;
  transform: scale(1);

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
`;

const Screen = styled.div`
  background: url("https://cdn.wccftech.com/wp-content/uploads/2018/07/iPad-Pro-5K-wallpaper-gallery-1-1109x1480.jpg");
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  border-radius: 15px;
`;

class IpadPro extends Component {
  render() {
    return (
      <Case>
        <Screen />
      </Case>
    );
  }
}

export default IpadPro;
