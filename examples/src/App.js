import React, { Component } from "react";

import styled from "styled-components";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../src";

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
          <IphoneX />
        </Grid>
      </div>
    );
  }
}

export default App;
