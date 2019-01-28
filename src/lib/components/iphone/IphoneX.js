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
    this.state = { bg: props.backgrounds[0] };
  }

  componentDidMount() {
    let index = 1;
    setInterval(() => {
      this.setState({
        bg: this.props.backgrounds[index++]
      });
      if (index === this.props.backgrounds.length) 
        index = 0;
    }, this.props.delay);
  }

  render() {
    const { landscape, sizes, delay } = this.props;
    return (
      <Case landscape={landscape} sizes={sizes}>
        {this.props.children || (
          <Screen background={this.state.bg} delay={delay}>
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
