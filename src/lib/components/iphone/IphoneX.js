import React, { Component } from "react";
import styled from "styled-components";

import { CaseStyles, VolumeBtns, PowerBtn } from "./IphoneX.styles";

import Screen from "./Screen";

const Case = styled.div`
  ${CaseStyles}
`;

class IphoneX extends Component {
  render() {
    const { landscape, sizes, delay, backgrounds } = this.props;
    return (
      <Case landscape={landscape} sizes={sizes}>
        {this.props.children || (
          <Screen backgrounds={backgrounds} delay={delay} />
        )}
        <VolumeBtns />
        <PowerBtn />
      </Case>
    );
  }
}

export default IphoneX;
