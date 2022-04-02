const initState = {
  profile: [],
  search: [],
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return {
        ...state,
        profile: [...state.profile, ...action.payload.profile],
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        search: [...state.search, ...action.payload.search],
        isLoading: false,
      };
    
    default:
      return { ...state };
  }
};

export default profileReducer;
