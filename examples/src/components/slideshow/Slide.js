import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../../../src";
import Editor from "./Editor";

const DeviceSlideshow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 0px 200px;
`;

class Slide extends Component {
  device(count) {
    const { backgrounds } = this.props;
    let wpp1 = "https://i.imgur.com/7sy5OIT.jpg";
    let wpp2 = "https://i.imgur.com/uIN6Wxe.jpg";

    if (count == 0) {
      return (
        <IphoneX
          backgrounds={backgrounds.iphoneX}
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
    const { currentDevice } = this.props;

    return (
      <DeviceSlideshow>
        <Editor />
        {this.device(currentDevice)}
      </DeviceSlideshow>
    );
  }
}

const mapStateToProps = store => ({
  currentDevice: store.slideState.currentDevice,
  devices: store.slideState.devices,
  backgrounds: store.slideState.backgrounds
});

export default connect(mapStateToProps)(Slide);
