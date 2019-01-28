import React, { Component } from "react";
import styled from "styled-components";

import { Screen, CaseStyles, Buttons } from "./AppleWatch.styles";

const Case = styled.div`
  ${CaseStyles}
`;

class AppleWatch extends Component {
  render() {
    const { landscape, sizes, delay } = this.props;

    return (
      <Case sizes={sizes}>
        <Screen />
        <Buttons />
      </Case>
    );
  }
}

export default AppleWatch;
