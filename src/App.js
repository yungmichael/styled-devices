import React, { Component } from "react";

import styled from "styled-components";

import Iphone_6 from "./lib/Iphone_6";

const Grid = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: grid;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Grid>
        <Iphone_6 />
      </Grid>
    );
  }
}

export default App;
