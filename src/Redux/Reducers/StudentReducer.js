import {
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
} from "../Constants/StudentContants";

// GET ALL Groups
export const getAllGroupReducers = (state = {}, action) => {
  switch (action.type) {
    case GROUPS_GET_ALL_REQUEST:
      return { loading: true };
    case GROUPS_GET_ALL_SUCCESS:
      return { loading: false, data: action.payload };
    case GROUPS_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

  // GET One Groups
  export const getOneGroupReducers = (state = {}, action) => {
    switch (action.type) {
      case GROUPS_GET_ONE_REQUEST:
        return { loading: true };
      case GROUPS_GET_ONE_SUCCESS:
        return { loading: false, data: action.payload };
      case GROUPS_GET_ONE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


// // GET All Groups Times
// export const getAllGroupTimesReducers = (state = {}, action) => {
//     switch (action.type) {
//       case GROUPS_TIMES_GET_ONE_REQUEST:
//         return { loading: true };
//       case GROUPS_TIMES_GET_ONE_SUCCESS:
//         return { loading: false, data: action.payload };
//       case GROUPS_TIMES_GET_ONE_FAIL:
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
