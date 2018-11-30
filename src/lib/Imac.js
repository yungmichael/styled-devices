import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 50vh;
  background-color: inherit;
`;

const ImacDevice = styled.div`
  height: 38.78vh;
  width: 50vh;
`;

const ImacFrame = styled.div`
  background: #fefefe;
  border-radius: 18px;
  box-shadow: inset 0 0 0 2px #dedede;
  height: 88%;
  padding: 24px 24px 80px 24px;
  position: relative;
  width: 100%;

  ::before {
    bottom: 15px;
    color: #333;
    content: "";
    font-size: 24px;
    height: 24px;
    left: 50%;
    line-height: 24px;
    margin-left: -100px;
    position: absolute;
    text-align: center;
    width: 200px;
    z-index: 9;
  }

  ::after {
    background: #333;
    border-radius: 0 0 18px 18px;
    bottom: 2px;
    content: "";
    height: 54px;
    left: 2px;
    position: absolute;
    width: 100%;
  }
`;

const Content = styled.div`
  border: 2px solid #333;
  border-radius: 2px;
  height: 100%;
  width: 100%;
`;

const Power = styled.div`

  ::after {
    content: "";
    background: #323232;
    border-radius: 2px;
    height: 6px;
    margin: 0 auto;
    position: relative;
    width: 100px;
  }
  ::before {
    content: "";
    border: solid transparent;
    border-bottom-color: #343434;
    border-width: 0 8px 50px 8px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    width: 80px;
  }
`;

class Imac extends Component {
  render() {
    return (
      <Container>
        <ImacDevice>
          <ImacFrame>
            <Content />
          </ImacFrame>
          <Power />
        </ImacDevice>
      </Container>
    );
  }
}

export default Imac;
