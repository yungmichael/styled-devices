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

class Iphone_6 extends Component {
  render() {
    return (
      <Container>
        <Iphone>
          <div />
          <div />
          <Screen />
          <div />
        </Iphone>
      </Container>
    );
  }
}

export default Iphone_6;
