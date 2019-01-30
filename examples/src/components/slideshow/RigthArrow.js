import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

import { nextDevice } from "../../actions";

const Circle = styled.div`
  height: 40px;
  width: 40px;
  background: #5163ba;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 35px;
  display: grid;
  align-items: center;
  cursor: pointer;

  > svg {
    margin-left: 13px;
    color: #fff;
  }
`;

class RightArrow extends Component {
  render() {
    const { nextDevice } = this.props;
    return (
      <Circle onClick={() => nextDevice()}>
        <FontAwesomeIcon icon="angle-right" />
      </Circle>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ nextDevice }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(RightArrow);
