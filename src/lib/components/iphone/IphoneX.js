import React, { Component } from "react";
import styled from "styled-components";

import {
  CaseStyles,
  ScreenStyles,
  Notch,
  VolumeBtns,
  PowerBtn
} from "./IphoneX.styles";

const Case = styled.div`
  ${CaseStyles}
`;
const Screen = styled.div`
  ${ScreenStyles}
`;

class IphoneX extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Case landscape={this.props.landscape} sizes={this.props.sizes}>
        <Screen background={this.props.background}>
          <Notch />
        </Screen>
        <VolumeBtns />
        <PowerBtn />
      </Case>
    );
  }
}

export default IphoneX;
