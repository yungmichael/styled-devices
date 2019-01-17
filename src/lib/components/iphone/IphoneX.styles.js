import styled, { css } from "styled-components";

import media from "../../utils/screenSizes";

export const CaseStyles = css`
  width: 380px;
  height: 820px;
  background: #000;
  padding: 25px;
  border-radius: 60px;
  box-shadow: inset 0px 0px 0px 2px #000, inset 0px 0px 0px 6px #e4e4e4,
    inset 0px 0px 0px 7px #000, inset 5px 0px 1px 6px #2f2f2f,
    inset -5px 0px 1px 5px #2f2f2e, inset 1px 0px 0px 10px #5c5c5c,
    inset 0px 0px 0px 12px #000, inset 10px 0px 3px 6px #afafaf,
    inset 10px 3px 8px #7b7b7b, inset 10px 0px 3px 9px #585858,
    inset -10px 0px 3px 6px #afafaf, inset -10px 3px 8px #7b7b78,
    inset -10px 0px 3px 9px #585858, inset -20px 0px 13px 11px #0f0f0f,
    inset 20px 0px 7px 11px #0f0f0f, inset 0px 0px 0px 19px #636363;
  position: relative;
  transition: all ease-in-out 0.3s;

  transform: ${props => (props.landscape ? "rotate(-90deg)" : null)};

  ${media.xl` transform: ${props =>
    props.sizes[0]
      ? "scale(" + props.sizes[0] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}
    ${props => (props.landscape ? "rotate(-90deg)" : null)};`}

  ${media.lg` transform: ${props =>
    props.sizes[1]
      ? "scale(" + props.sizes[1] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}
    ${props => (props.landscape ? "rotate(-90deg)" : null)};`}

  ${media.md` transform: ${props =>
    props.sizes[2]
      ? "scale(" + props.sizes[2] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}
    ${props => (props.landscape ? "rotate(-90deg)" : null)};`}

  ${media.sm` transform: ${props =>
    props.sizes[3]
      ? "scale(" + props.sizes[3] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}
    ${props => (props.landscape ? "rotate(-90deg)" : null)};`}

  ${media.xs` transform: ${props =>
    props.sizes[4]
      ? "scale(" + props.sizes[4] + ")"
      : "scale(" + props.sizes[props.sizes.length - 1] + ")"}
    ${props => (props.landscape ? "rotate(-90deg)" : null)};`}
`;

export const ScreenStyles = css`
  background: url(${props => props.background[0] || null});
  height: 820px;
  width: 380px;
  border-radius: 35px;
  position: relative;
  background-size: cover;
`;

export const Notch = styled.div`
  position: absolute;
  width: 210px;
  height: 30px;
  background: #000;
  content: "";
  right: 50%;
  transform: translateX(50%);
  border-radius: 0 0 25px 25px;

  ::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 7px;
    background: #222;
    top: 35%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  ::after {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    background: #222;
    top: 35%;
    left: 70%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

export const VolumeBtns = styled.div`
  position: absolute;
  height: 60px;
  width: 3px;
  left: -3.5px;
  top: 180px;
  background: #fff;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #5f5f5f;
  border-right: 1px solid #000;
  box-shadow: inset 0px 3px 2px 0px #333, inset 0px -3px 2px 0px #333;

  ::before {
    position: absolute;
    height: 60px;
    width: 3px;
    left: -1px;
    top: 80px;
    background: #fff;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #5f5f5f;
    border-right: 1px solid #000;
    box-shadow: inset 0px 3px 2px 0px #333, inset 0px -3px 2px 0px #333;
    content: "";
  }

  ::after {
    position: absolute;
    height: 33px;
    width: 3px;
    left: -1px;
    top: -63px;
    background: #fff;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #5f5f5f;
    border-right: 1px solid #000;
    box-shadow: inset 0px 3px 2px 0px #333, inset 0px -3px 2px 0px #333;
    content: "";
  }
`;

export const PowerBtn = styled.div`
  position: absolute;
  height: 100px;
  width: 3px;
  right: -3.5px;
  top: 200px;
  background: #fff;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #5f5f5f;
  border-left: 1px solid #000;
  box-shadow: inset 0px 3px 2px 0px #333, inset 0px -3px 2px 0px #333;
`;
