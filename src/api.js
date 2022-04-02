//base url
const base_url = `https://hyderabadcastingclub.com/api/`;

export const profileURL = (offset) =>
  `${base_url}profiles/?limit=7&offset=${offset}`;

//personal details url
export const profileDetailsURL = (id) => `${base_url}profiles/${id}/`;

export const personalDetailsURL = (id) =>
  `${base_url}personaldetails/?profile=${id}`;

export const interestedinDetailsURL = (id) =>
  `${base_url}interestedin/?profile=${id}`;

export const modelImagesDetailsURL = (id) =>
  `${base_url}modelimages/?profile=${id}`;

export const skillsDetailsURL = (id) => `${base_url}skills/?profile=${id}`;

export const previousProjectsDetailsURL = (id) =>
  `${base_url}previousprojects/?profile=${id}`;

//filter section url
export const languageDetailsURL = () => `${base_url}languages/?limit=20`;

export const filterDetailsURL = (
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
  offset
) =>
  `${base_url}profiles/?categories=${categories}&role=${role}&gender=${gender}&min_age=${minAge}&max_age=${maxAge}&languages=${language}&min_height=${minHeight}&max_height=${maxHeight}&state=${state}&city=${city}&skills=${skills}&limit=7&offset=${offset}`;

export const searchDetailsURL = (id) => `${base_url}profiles/?search=${ id}&limit=6`;

export const stateDetailsURL = () => `${base_url}states/?limit=40`;

export const citiesDetailsURL = (id) =>
  `${base_url}cities/?state=${id}&limit=50`;

// /models?categories=pub_party&gender=female&min_age=0&max_age=99&language=English&min_height=&max_height=

console.log(personalDetailsURL(30));

//authentication
export const signInDetailsURL = () => `${base_url}login/`;
export const signOutDetailsURL = () => `${base_url}logout/`;
export const signUpDetailsURL = () => `${base_url}register/`;
// categories=movies&gender=&min_age=0&max_age=99&language=&min_height=&max_height=
