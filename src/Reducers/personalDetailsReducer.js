const initState = {
  profileDetails: {},
  personalDetails: {},
  modelImagesDetails:{},
  interestedinDetails: {},
  skillsDetails:{},
  perviousProjectsDetails:{},
  isLoading: true,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PERSONAL_DETAIL":
      return {
        ...state,
        profileDetails: action.payload.profileDetails,
        personalDetails: action.payload.personalDetails,
        interestedinDetails: action.payload.interestedinDetails,
        modelImagesDetails: action.payload.modelImagesDetails,
        skillsDetails: action.payload.skillsDetails,
        perviousProjectsDetails: action.payload.perviousProjectsDetails,
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

export default profileReducer;
