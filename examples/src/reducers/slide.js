import {
  NEXT_DEVICE,
  PREV_DEVICE,
  ADD_BACKGROUND,
  DELETE_BACKGROUND
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

export const slideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_DEVICE:
      if (state.currentDevice == state.devices.length - 1) {
        return {
          ...state,
          currentDevice: 0
        };
      }
      return {
        ...state,
        currentDevice: state.currentDevice + 1
      };

    case PREV_DEVICE:
      if (state.currentDevice == 0) {
        return {
          ...state,
          currentDevice: state.devices.length - 1
        };
      } else {
        return {
          ...state,
          currentDevice: state.currentDevice - 1
        };
      }

    case ADD_BACKGROUND:
      let newIphone = state.backgrounds.iphoneX;
      newIphone.push(" ");

      return {
        ...state,
        backgrounds: {
          iphoneX: newIphone
        }
      };

    case DELETE_BACKGROUND:
      return {
        ...state,
        backgrounds: {
          ...state.backgrounds,
          iphoneX: [...state.backgrounds.iphoneX].filter(
            (val, index) => index !== action.index
          )
        }
      };

    default:
      return state;
  }
};
