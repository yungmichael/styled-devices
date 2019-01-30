import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.nav`
  height: 60px;
  width: 100%;
  background: #5163ba;
  top: 0;
  text-align: center;
  font-size: 14px;
`;

const LinkContainer = styled.div`
  color: #fff;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 100%;
  justify-content: center;
  width: 100px;
`;

const Link = styled.a`
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-weight: 600;
  left: 50%;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <LinkContainer>
          <Link>Devices</Link>
        </LinkContainer>
        <LinkContainer>
          <Link>Contact</Link>
        </LinkContainer>
      </Container>
    );
  }
}

export default Navbar;
