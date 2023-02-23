// import {
//   TEACHERS_CREATED,
//   TEACHERS_FETCHED,
//   TEACHER_FETCHING,
//   TEACHER_FETCHING_ERROR,
// } from "../Constants/ModalContants.js";


// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case TEACHER_FETCHING:
//       return {
//         ...state,
//         loading: "true",
//       };
//     case TEACHERS_FETCHED:
//       return {
//         ...state,
//         teachers: action.payload,
//       };
//     case TEACHER_FETCHING_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case TEACHERS_CREATED:
//       return {
//         ...state,
//         teachers: [...state.teachers, action.payload],
//       };
//   }
// };
