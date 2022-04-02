import axios from "axios";
import {
  citiesDetailsURL,
  filterDetailsURL,
  languageDetailsURL,
  stateDetailsURL,
} from "../api";

export const loadState = () => async (dispatch) => {
  const stateData = await axios.get(stateDetailsURL());
  const languageData = await axios.get(languageDetailsURL());
  dispatch({
    type: "FETCH_STATE",
    payload: {
      states: stateData.data.results,
      languages: languageData.data.results,
    },
  });
};

export const loadCities = (id) => async (dispatch) => {
  const citiesData = await axios.get(citiesDetailsURL(id));
  dispatch({
    type: "FETCH_CITIES",
    payload: {
      cities: citiesData.data.results,
    },
  });
};

export const loadFilter =
  (
    categories,
    role,
    gender,
    language,
    state,
    city,
    skills,
    minHeight,
    maxHeight,
    minAge,
    maxAge,
    page
  ) =>
  async (dispatch) => {
    dispatch({
      type: "LOADING_DETAIL",
    });
    
    const filterData = await axios.get(
      filterDetailsURL(
        categories,
        role,
        gender,
        language,
        state,
        city,
        skills,
        minHeight,
        maxHeight,
        minAge,
        maxAge,
        page
      )
    );
    dispatch({
      type: "FETCH_FILTERDETAILS",
      payload: {
        filterDetails: filterData.data.results,
      },
    });
  };
