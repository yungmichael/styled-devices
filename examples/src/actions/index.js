import {
  NEXT_DEVICE,
  PREV_DEVICE,
  ADD_BACKGROUND,
  DELETE_BACKGROUND
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
