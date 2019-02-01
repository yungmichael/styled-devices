import {
  NEXT_DEVICE,
  PREV_DEVICE,
  ADD_BACKGROUND
} from "../actions/actionTypes";

const initialState = {
  currentDevice: 0,
  devices: ["IphoneX", "AppleWatch"],
  backgrounds: {
    iphoneX: [
      "https://i.imgur.com/x84OpQN.jpg",
      "https://i.imgur.com/EG4Lapn.png"
    ]
  }
};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_DEVICE:
      if (state.currentDevice == state.devices.length - 1) {
        return {
          devices: state.devices,
          backgrounds: state.backgrounds,
          currentDevice: 0
        };
      }
      return {
        devices: state.devices,
        backgrounds: state.backgrounds,
        currentDevice: state.currentDevice + 1
      };

    case PREV_DEVICE:
      if (state.currentDevice == 0) {
        return {
          devices: state.devices,
          backgrounds: state.backgrounds,
          currentDevice: state.devices.length - 1
        };
      } else {
        return {
          devices: state.devices,
          backgrounds: state.backgrounds,
          currentDevice: state.currentDevice - 1
        };
      }

    case ADD_BACKGROUND:
      let newIphone = state.backgrounds.iphoneX;
      newIphone.push("");

      return {
        devices: state.devices,
        currentDevice: state.currentDevice,
        backgrounds: {
          iphoneX: newIphone
        }
      };

    default:
      return state;
  }
};
