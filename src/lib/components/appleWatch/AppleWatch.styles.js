import styled, { css } from "styled-components";

import media from "../../utils/screenSizes";

export const CaseStyles = css`
  width: 210px;
  height: 250px;
  background: #ececec;
  border-radius: 40px;
  padding: 10px;
  box-shadow: inset 0px 0px 3px 3px #b2b2b2;
  position: relative;
  transition: all ease-in-out 0.3s;

  transform: rotate(0);


  ${media.xl` transform: ${props =>
    props.sizes[0]
      ? "scale(" + props.sizes[0] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}`}

  ${media.lg` transform: ${props =>
    props.sizes[1]
      ? "scale(" + props.sizes[1] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}`}

  ${media.md` transform: ${props =>
    props.sizes[2]
      ? "scale(" + props.sizes[2] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}`}

  ${media.sm` transform: ${props =>
    props.sizes[3]
      ? "scale(" + props.sizes[3] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}`}

  ${media.xs` transform: ${props =>
    props.sizes[4]
      ? "scale(" + props.sizes[4] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}`}
`;

export const ScreenStyles = css`
  height: 100%;
  width: 100%;
  background: #060606;
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 1px #333, inset 54px 0px 40px -40px #737373,
    inset -5px -5px 5px -1px #9a9a9a;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background: url(${props => props.background || null});
    background-color: #060606;
    height: 195px;
    width: 155px;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    background-size: cover;
    border-radius: 3px;
  }

  ::before {
    content: "";
    top: 1px;
    height: 15px;
    width: 170px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    background: #5d5d5d;
    border-radius: 10px 10px 20px 20px / 4px 4px 12px 12px;
    box-shadow: inset 0px 5px 7px 0px #b0b0b0, inset 0px -1px 5px 2px #3c3c3c;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  height: 70px;
  width: 5px;
  right: -3.5px;
  top: 145px;
  background: #fff;
  border-radius: 0px 5px 5px 0px;
  box-shadow: inset 0px 3px 2px 0px #666, inset 0px -3px 2px 0px #666;

  ::before {
    content: "";
    position: absolute;
    background: #fffcfc;
    border-radius: 8px 4px 4px 8px / 20px 4px 4px 20px;
    box-shadow: inset 2px 0px 4px 0px #2b2b2b, inset -6px 0px 3px 0px #a6a6a6,
      inset 0px -5px 10px 0px #969696, inset 0px 5px 10px 0px #969696;
    height: 45px;
    position: absolute;
    right: -7px;
    top: -80px;
    width: 17px;
    z-index: 9;
  }
`;
