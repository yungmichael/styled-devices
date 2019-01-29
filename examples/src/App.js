import React, { Component } from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import LeftArrow from "./components/slideshow/leftArrow";
import RigthArrow from "./components/slideshow/RigthArrow";

import Navbar from "./components/navbar/index";

library.add(faAngleLeft);
library.add(faAngleRight);

const Container = styled.div`
  background: #e0f1ff;
  font-family: sans-serif;
  height: 100vh;
  display: grid;
  grid-template-rows: 8vh 92vh;
  position: relative;
`;

import Slide from "./components/slideshow/Slide";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <LeftArrow />
        <Slide />
        <RigthArrow />
      </Container>
    );
  }
}

export default App;
