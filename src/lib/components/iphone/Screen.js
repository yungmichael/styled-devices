import React from "react";
import styled, { keyframes } from "styled-components";

import { Notch } from "./IphoneX.styles";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
        animation-timing-function: ease-in;
    }
    3% {
        opacity: 1;
        animation-timing-function: ease-out;
    }
    30% {
        opacity: 1
    }
    33% {
        opacity: 0
    }
`;

const Container = styled.div`
  height: 820px;
  width: 380px;
  border-radius: 35px;
  position: relative;
  background-size: cover;
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    background-size: cover;
    background-position: 50% 50%;
    opacity: 0;
    z-index: 0;
    animation: ${fadeInOut} ${props => props.totalDelay}ms ease-in-out infinite;
    border-radius: 35px;
  }

  ${props =>
    props.backgrounds.map(
      (val, i) =>
        `li:nth-child(${i +
          1}){background-image: url("${val}"); animation-delay: ${i *
          props.delay}ms;}`
    )}
`;

export default function Screen(props) {
  const { backgrounds, delay } = props;

  return (
    <Container>
      <List
        delay={delay}
        backgrounds={backgrounds}
        totalDelay={backgrounds.length * delay}
      >
        {backgrounds.map(val => (
          <li />
        ))}
      </List>
      <Notch />
    </Container>
  );
}
