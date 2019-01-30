import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../../../src";

const DeviceSlideshow = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  align-items: center;
  justify-items: center;
`;

class Slide extends Component {
  device(count) {
    let wpp1 = "https://i.imgur.com/7sy5OIT.jpg";
    let wpp2 = "https://i.imgur.com/uIN6Wxe.jpg";

    if (count == 0) {
      return (
        <IphoneX
          backgrounds={["https://i.imgur.com/x84OpQN.jpg", "https://i.imgur.com/EG4Lapn.png"]}
          sizes={[0.8, 0.7, 0.5]}
          delay={5000}
        />
      );
    }

    if (count == 1) {
      return (
        <AppleWatch
          backgrounds={[wpp1, wpp2]}
          sizes={[0.8, 0.7, 0.5]}
          delay={5000}
        />
      );
    }
  }

  render() {
    const { currentDevice, devices } = this.props;

    return <DeviceSlideshow> {this.device(currentDevice)}</DeviceSlideshow>;
  }
}

const mapStateToProps = store => ({
  currentDevice: store.slideState.currentDevice,
  devices: store.slideState.devices
});

export default connect(mapStateToProps)(Slide);
