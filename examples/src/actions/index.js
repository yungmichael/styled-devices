import { NEXT_DEVICE, PREV_DEVICE } from "../actions/actionTypes";

export const nextDevice = () => ({
  type: NEXT_DEVICE
});

export const prevDevice = () => ({
  type: PREV_DEVICE
});
