import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { theme } from "../../utils/theme";
import { bindActionCreators } from "redux";

import { addBg } from "../../actions";

import { fadeIn } from "../../utils/keyframes";

import BackgorundsListItem from "./Editor/BackgroundListItem";
import Orientation from "./Editor/Orientation";
import Delay from "./Editor/Delay";
import Sizes from "./Editor/Sizes";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 95%;
  height: 60%;
  grid-gap: 50px;
`;

const BackgorundsListContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

const BackgorundsListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: ${theme.text_color_secondary};
  font-weight: bold;
`;

const AddOne = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${theme.color_green};
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  font-weight: lighter;
`;

const BackgorundsList = styled.ul`
  padding: 0px;
  list-style: none;
`;

const Hint = styled.div`
  font-size: 12px;
  color: ${theme.text_color_secondary};
  margin-top: 5px;
  animation: ${fadeIn} 0.5s ease-in 1;
`;

const SecondColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
`;

class Editor extends Component {
  /* static propTypes = {
    prop: PropTypes
  } */
  constructor(props) {
    super(props);
    this.state = {};
  }

  verifyAndAddBg() {
    const { backgrounds, addBg } = this.props;
    if (backgrounds.iphoneX.filter(val => val == " ").length > 0) {
      this.setState({
        hint: "You already have a blank background"
      });
      return false;
    } else {
      addBg();
      return true;
    }
  }

  render() {
    const { backgrounds } = this.props;

    return (
      <Container>
        <BackgorundsListContainer>
          <BackgorundsListHeader>
            Backgrounds
            <AddOne onClick={() => this.verifyAndAddBg()}>
              Add background
            </AddOne>
          </BackgorundsListHeader>
          <BackgorundsList>
            {backgrounds.iphoneX.map((val, index) => {
              return <BackgorundsListItem index={index} key={index} />;
            })}
            {this.state.hint ? <Hint>{this.state.hint}</Hint> : null}
          </BackgorundsList>
        </BackgorundsListContainer>
        <SecondColumn>
          <Orientation />
          <Delay />
          <Sizes />
        </SecondColumn>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  backgrounds: store.slideState.backgrounds
});

const mapDispatchToProps = dispatch => bindActionCreators({ addBg }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
