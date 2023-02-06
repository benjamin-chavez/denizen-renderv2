import axios from "axios";

// TODO: CHANGE THIS BACK TO API URL TO HIT PG DATABASE
// const ROOT_URL = '/api/v1/participants';
const ROOT_URL =
  "https://raw.githubusercontent.com/bmchavez/denizen-renderv2/master/app/javascript/denizenDesigner/participants.json";

export const FETCH_CITIES_REQUEST = "FETCH_CITIES_REQUEST";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_FAILURE = "FETCH_CITIES_FAILURE";

export const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST,
  };
};

export const fetchCitiesSuccess = (quotes) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: quotes,
  };
};

export const fetchCitiesFailure = (error) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error,
  };
};

export const fetchCities = () => {
  return (dispatch) => {
    dispatch(fetchCitiesRequest);
    axios
      .get(ROOT_URL)
      .then((response) => {
        const cities = response.data;
        dispatch(fetchCitiesSuccess(cities));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCitiesFailure(errorMsg));
      });
  };
};
