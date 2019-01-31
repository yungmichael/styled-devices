import {
  NEXT_DEVICE,
  PREV_DEVICE,
  ADD_BACKGROUND
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
