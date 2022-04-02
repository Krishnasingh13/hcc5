import axios from "axios";
import {
  personalDetailsURL,
  interestedinDetailsURL,
  profileDetailsURL,
  modelImagesDetailsURL,
  skillsDetailsURL,
  previousProjectsDetailsURL,
} from "../api";

export const loadPersonalDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });


  const profileDetailsData = await axios.get(profileDetailsURL(id));
  const personalDetailsData = await axios.get(personalDetailsURL(id));
  const interestedinDetailsData = await axios.get(interestedinDetailsURL(id));
  const modelImageData = await axios.get(modelImagesDetailsURL(id));
  const skillsData = await axios.get(skillsDetailsURL(id));
  const perviousProjectsData = await axios.get(previousProjectsDetailsURL(id));

  dispatch({
    type: "GET_PERSONAL_DETAIL",
    payload: {  
      profileDetails: profileDetailsData.data,
      personalDetails: personalDetailsData.data.results,
      interestedinDetails: interestedinDetailsData.data.results,
      modelImagesDetails: modelImageData.data.results,
      skillsDetails: skillsData.data.results,
      perviousProjectsDetails: perviousProjectsData.data.results,
    },
  });

  
};
