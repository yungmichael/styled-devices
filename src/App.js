import React, { Component } from "react";

import styled from "styled-components";

import Iphone8 from "./lib/Iphone8";
import IphoneX from "./lib/IphoneX";
import Macbook from "./lib/MacbookPro";
import Imac from "./lib/Imac";
import AppleWatch from "./lib/AppleWatch";

const Grid = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 50vh;
  width: 50vh;
  background-color: inherit;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Container>
            <Iphone8 />
          </Container>
        </Grid>
        <Grid>
          <Macbook />
        </Grid>
        <Grid>
          <Imac />
        </Grid>
        <Grid>
          <AppleWatch />
        </Grid>
        <Grid>
          <IphoneX />
        </Grid>
      </div>
    );
  }
}

export default App;
