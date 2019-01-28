import React, { Component } from "react";
import styled from "styled-components";

import { ScreenStyles, CaseStyles, Buttons } from "./AppleWatch.styles";

const Case = styled.div`
  ${CaseStyles}
`;

const Screen = styled.div`
  ${ScreenStyles}
`;

class AppleWatch extends Component {
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
    const { landscape, sizes, delay } = this.props;

    return (
      <Case sizes={sizes}>
        <Screen background={this.state.bg} delay={delay} />
        <Buttons />
      </Case>
    );
  }
}

export default AppleWatch;
