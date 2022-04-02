import axios from "axios";
import { profileURL, searchDetailsURL } from "../api";

export const loadProfile = (page) => async (dispatch) => {
  const profileData = await axios.get(profileURL(page));
  dispatch({
    type: "FETCH_PROFILE",
    payload: {
      profile: profileData.data.results,
    },
  });
};

export const loadSearch = (id) => async (dispatch) => {
  const searchData = await axios.get(searchDetailsURL(id));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchData.data.results,
    },
  });
};
