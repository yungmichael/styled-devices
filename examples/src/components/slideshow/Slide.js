import React, { Component } from "react";
import styled from "styled-components";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../../../src";

const DeviceSlideshow = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  align-items: center;
  justify-items: center;
`;

export default class Slide extends Component {
  render() {
    let wpp1 = "https://i.imgur.com/7sy5OIT.jpg";
    let wpp2 = "https://i.imgur.com/uIN6Wxe.jpg";
    return (
      <DeviceSlideshow>
        <AppleWatch
          backgrounds={[wpp1, wpp2]}
          sizes={[1.0, 0.9, 0.8, 0.5]}
          delay={5000}
        />
      </DeviceSlideshow>
    );
  }
}
