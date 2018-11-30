import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: inherit;
`;

const Iphone = styled.div`
  height: 50vh;
  width: calc(50vh * 0.48);
  background-color: #fff;
  box-shadow: inset 0 0 0 0.13vh #bbbbc5, inset 0 0 0 0.35vh #e2e3e4;
  margin: 0 auto;
  border-radius: 3.8vh;
  display: grid;
  grid-template-rows: 6% 6% 76% 12%;
  position: relative;
`;

const Screen = styled.div`
  background: url("https://media.idownloadblog.com/wp-content/uploads/2016/05/Reset-iOS-home-screen-layout.png");
  background-size: cover;
  width: 89%;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #000;
`;

const Speaker = styled.div`
  width: 20%;
  background: #666;
  height: 14%;
  border-radius: 3px;
  margin: 0.8vh auto;

  ::after {
    width: 0.5vh;
    background: #666;
    height: 0.5vh;
    border-radius: 50%;
    margin: 3% auto;
    top: 3%;
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
  }

  ::before {
    width: 0.7vh;
    background: #666;
    height: 0.7vh;
    border-radius: 50%;
    margin: 0.7vh;
    top: 5.8%;
    position: absolute;
    content: "";
    left: 33%;
    transform: translateX(-50%);
  }
`;

const Button = styled.div`
  align-self: center;
  margin: auto;
  height: 3.3vh;
  width: 3.3vh;
  border-radius: 50%;
  background: linear-gradient(#dfdfdf, #fefefe);
  border: 1px solid #ccc;
`;

const Power = styled.div`
  background: #bbb;
  position: absolute;
  width: 0.4vh;
  height: 8%;
  right: -0.3vh;
  top: 23%;
`;

const Volume = styled.div`
  background: #bbb;
  position: absolute;
  width: 0.4vh;
  height: 6%;
  left: -0.3vh;
  top: 23%;
  content: "";

  ::before {
    background: #bbb;
    position: absolute;
    width: 0.4vh;
    height: 70%;
    top: -150%;
    content: "";
  }

  ::after {
    background: #bbb;
    position: absolute;
    width: 0.4vh;
    height: 100%;
    top: 150%;
    content: "";
  }
`;

class Iphone8 extends Component {
  render() {
    return (
      <Container>
        <Iphone>
          <div />
          <Speaker />
          <Screen />
          <Button />
          <Power />
          <Volume />
        </Iphone>
      </Container>
    );
  }
}

export default Iphone8;
