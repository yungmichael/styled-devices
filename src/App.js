import React, { Component } from "react";

import styled from "styled-components";

import IphoneX from "./lib/IphoneX";
import Macbook from "./lib/MacbookPro";
import IpadPro from "./lib/Ipad";
import AppleWatch from "./lib/AppleWatch";

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
          <Macbook />
        </Grid>
        <Grid>
          <AppleWatch />
        </Grid>
        <Grid>
          <IphoneX />
        </Grid>
        <Grid>
          <IpadPro />
        </Grid>
      </div>
    );
  }
}

export default App;
