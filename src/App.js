import React, { Component } from "react";

import styled from "styled-components";

import Iphone6 from "./lib/Iphone6";
import Macbook from "./lib/MacbookPro";

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
      <div>
        <Grid>
          <Iphone6 />
        </Grid>
        <Grid>
          <Macbook />
        </Grid>
      </div>
    );
  }
}

export default App;
