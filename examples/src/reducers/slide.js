import { NEXT_DEVICE, PREV_DEVICE } from "../actions/actionTypes";

const initialState = {
  currentDevice: 0,
  devices: ["AppleWatch", "IphoneX"]
};
export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_DEVICE:
      if (state.currentDevice == state.devices.length - 1) {
        return {
          devices: state.devices,
          currentDevice: 0
        };
      }
      return {
        devices: state.devices,
        currentDevice: state.currentDevice + 1
      };

    case PREV_DEVICE:
      if (state.currentDevice == 0) {
        return {
          devices: state.devices,
          currentDevice: state.devices.length - 1
        };
      } else {
        return {
          devices: state.devices,
          currentDevice: state.currentDevice - 1
        };
      }

    default:
      return state;
  }
};
