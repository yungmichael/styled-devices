import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { theme } from "../../../utils/theme";
import { fadeIn } from "../../../utils/keyframes";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
`;

const InputBackground = styled.input`
  width: 100%;
  padding: 8px 16px;
  background: ${theme.color_white};
  list-style: none;
  font-size: 14px;
  border: 1px solid ${theme.text_color_grey};
  border-top: none;
  z-index: 0;
  position: absolute;

  :focus {
    outline: none;
  }
`;

const ClearIcon = styled.div`
  position: absolute;
  right: 30px;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  animation: ${fadeIn} 0.3s ease-in-out 1;
  color: ${theme.text_color_secondary};
  opacity: ${props => (props.state ? "1" : "0")};
  cursor: pointer;
`;

const TrashIcon = styled.div`
  position: absolute;
  right: 10px;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  animation: ${fadeIn} 0.3s ease-in-out 1;
  color: ${theme.text_color_secondary};
  opacity: ${props => (props.state ? "1" : "0")};
  cursor: pointer;
`;

export default class BackgorundsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false,
      trash: false,
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  desactivateIcons() {
    this.setState({
      ...this.state,
      clear: false,
      trash: false
    });
  }

  activateIcons() {
    this.setState({
      ...this.state,
      clear: true,
      trash: true
    });
  }

  handleChange(event) {
    this.setState({ ...this.state, value: event.target.value });
  }

  handleClear() {
    this.setState({ ...this.state, value: "" });
  }

  render() {
    return (
      <Container>
        <InputBackground
          onFocus={() => this.activateIcons()}
          onBlur={() => this.desactivateIcons()}
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />

        <ClearIcon state={this.state.clear} onClick={() => this.handleClear()}>
          <FontAwesomeIcon icon="times" />
        </ClearIcon>

        <TrashIcon state={this.state.clear} onClick={() => this.handleClear()}>
          <FontAwesomeIcon icon="trash" />
        </TrashIcon>
      </Container>
    );
  }
}
