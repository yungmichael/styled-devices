import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.nav`
  height: 60px;
  width: 100%;
  background: #e0f1ff;
  top: 0;
  text-align: center;
`;

const LinkContainer = styled.div`
  padding: 10px;
  border: 2px solid #82bfdd;
  color: #82bfdd;
  font-weight: bold;
  border-radius: 5px;
  margin: 10px;
  display: inline;
  transform: translateY(-50%);
  top: 50%;
  position: relative;
  cursor: pointer;
`;

const Link = styled.a`
  height: 60px;
  width: 100%;
  background: aliceblue;
  top: 0;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <LinkContainer>
          <a>Devices</a>
        </LinkContainer>
        <LinkContainer>
          <a>Contact</a>
        </LinkContainer>
      </Container>
    );
  }
}

export default Navbar;
