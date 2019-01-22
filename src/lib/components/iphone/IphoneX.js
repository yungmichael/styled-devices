import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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
    this.state = { bg: props.backgrounds[0] };
  }

  componentDidMount() {
    let index = 1;
    setInterval(() => {
      this.setState({
        bg: this.props.backgrounds[index++]
      });
      if (index === this.props.backgrounds.length) index = 0;
    }, this.props.delay);
  }

  render() {
    return (
      <Case landscape={this.props.landscape} sizes={this.props.sizes}>
        {this.props.children || (
          <Screen background={this.state.bg} delay={this.state.delay}>
            <Notch />
          </Screen>
        )}
        <VolumeBtns />
        <PowerBtn />
      </Case>
    );
  }
}

export default IphoneX;
