import React, { Component } from "react";
import styled from "styled-components";
import Title from "../Title";
import AddSizeButton from "./btnAddSize";
import Table from "./table";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addSize } from "../../../../actions/index";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

class Sizes extends Component {
  handleClick() {
    const { addSize, sizes } = this.props;
    if (sizes.length < 5) {
      addSize();
    }
  }

  render() {
    return (
      <Container>
        <TitleContainer>
          <Title title="Sizes " />
          <AddSizeButton
            handleClick={this.handleClick.bind(this)}
            title="Add size"
          />
        </TitleContainer>
        <Table sizes={this.props.sizes} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addSize }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Sizes);
