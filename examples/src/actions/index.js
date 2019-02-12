import {
  NEXT_DEVICE,
  PREV_DEVICE,
  ADD_BACKGROUND,
  DELETE_BACKGROUND,
  CHANGE_BACKGROUND,
  ADD_SIZE
} from "../actions/actionTypes";

export const nextDevice = () => ({
  type: NEXT_DEVICE
});

export const prevDevice = () => ({
  type: PREV_DEVICE
});

export const addBg = () => ({
  type: ADD_BACKGROUND
});

export const deleteBg = i => ({
  type: DELETE_BACKGROUND,
  index: i
});

export const changeBg = (val, i) => ({
  type: CHANGE_BACKGROUND,
  value: val,
  index: i
});

export const addSize = () => ({
  type: ADD_SIZE
});
