import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

import { prevDevice } from "../../actions";
import { pulse, fadeIn } from "../../utils/keyframes";
import { theme } from "../../utils/theme";

const Circle = styled.div`
  height: 40px;
  width: 40px;
  background: ${theme.color_secondary};
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.color_white};
  font-size: 35px;
  display: grid;
  align-items: center;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out 1;

  ::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 4px solid ${theme.color_secondary};
    background: transparent;
    margin: 0;
    animation: ${pulse} 0.8s ease 3 2s;
  }

  > svg {
    margin-left: 9px;
    color: ${theme.color_white};
  }
`;

class LeftArrow extends Component {
  render() {
    const { prevDevice } = this.props;
    return (
      <Circle onClick={() => prevDevice()}>
        <FontAwesomeIcon icon="angle-left" />
      </Circle>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ prevDevice }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(LeftArrow);
