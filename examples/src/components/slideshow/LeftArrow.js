import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

import { prevDevice } from "../../actions";

const Circle = styled.div`
  height: 40px;
  width: 40px;
  background: #5163ba;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 35px;
  display: grid;
  align-items: center;
  cursor: pointer;

  > svg {
    margin-left: 7px;
    color: #fff;
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
