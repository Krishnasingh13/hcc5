const initState = {
  states: [],
  languages: [],
  cities: [],
  filterDetails: [],
  isLoading: true,
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_STATE":
      return {
        ...state,
        states: action.payload.states,
        languages: action.payload.languages,
      };
    case "FETCH_CITIES":
      return {
        ...state,
        cities: action.payload.cities,
      };
    case "FETCH_FILTERDETAILS":
      return {
        ...state,
        filterDetails: action.payload.filterDetails,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default filterReducer;
