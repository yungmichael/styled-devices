import { PASS_SLIDE } from "../actions/iphoneActions";
import { combineReducers } from "redux";

function slides(state = {}, action) {
  switch (action.type) {
    case PASS_SLIDE:
      if (state.current_index < state.slides.length) {
        return {
          slides: state.slides,
          current_index: state.current_index + 1
        };
      } else {
        return {
          slides: state.slides,
          current_index: 0
        };
      }

    default:
      return state;
  }
}

const slideshow = combineReducers({
  slides
});

export default slideshow;
