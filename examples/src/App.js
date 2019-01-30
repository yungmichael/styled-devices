import React, { Component } from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import LeftArrow from "./components/slideshow/leftArrow";
import RigthArrow from "./components/slideshow/RigthArrow";

import Navbar from "./components/navbar/index";

library.add(faAngleLeft);
library.add(faAngleRight);

const Container = styled.div`
  background: #f5f6f9;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
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
