import React, { Component } from "react";

import styled from "styled-components";

import Iphone8 from "./lib/Iphone8";
import Macbook from "./lib/MacbookPro";
import Imac from "./lib/Imac";

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
          <Iphone8 />
        </Grid>
        <Grid>
          <Macbook />
        </Grid>
        <Grid>
          <Imac />
        </Grid>
      </div>
    );
  }
}

export default App;
