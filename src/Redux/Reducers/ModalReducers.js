const initialState = {
  teachers: [],
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEACHERS_FETCHED":
      return {
        ...state,
        teachers: action.payload,
      };
    case "TEACHERS_CREATED":
      return {
        ...state,
        news: [...state.news, action.payload],
      };
  }
};
