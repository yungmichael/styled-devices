import React, { Component } from "react";
import styled from "styled-components";
import Title from "../Title";
import AddSizeButton from "./btnAddSize";
import Table from "./table";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export default class Sizes extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <Title title="Sizes " />
          <AddSizeButton onClick={() => alert("clicked")} title="Add size" />
        </TitleContainer>
        <Table sizes={this.props.sizes} />
      </Container>
    );
  }
}
