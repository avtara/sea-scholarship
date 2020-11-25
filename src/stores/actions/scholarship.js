import axios from "axios";

export function contentHasError(err) {
  return {
    type: "CONTENT_WEBSITE_HAS_ERRORED",
    error: err
  };
}

export function contentIsLoading(bool) {
  return {
    type: "CONTENT_WEBSITE_IS_LOADING",
    loading: bool
  };
}

export function contentFetchDataSuccess(items) {
  return {
    type: "CONTENT_WEBSITE_FETCH_DATA_SUCCESS",
    payload: {
      ...items
    },
    loading: false
  };
}

export const contentFetchData = () => async (dispatch) => {
  try {
    const request = await axios.get(
      `${process.env.REACT_APP_API_GARENA}_/items/sea_scholarship?access_token=${process.env.REACT_APP_ACCESS_API_GARENA}&fields=*.*`
    );
    const data = request.data.data;
    dispatch(contentFetchDataSuccess(data));
  } catch (e) {
    dispatch(contentHasError(e));
  }
};

export function universityHasError(err) {
  return {
    type: "UNIVERSITY_PARTNER_HAS_ERRORED",
    error: err
  };
}

export function universityIsLoading(bool) {
  return {
    type: "UNIVERSITY_PARTNER_IS_LOADING",
    loading: bool
  };
}

export function universityFetchDataSuccess(items) {
  return {
    type: "UNIVERSITY_PARTNER_FETCH_DATA_SUCCESS",
    payload: {
      ...items
    },
    loading: false
  };
}

export const universityFetchData = () => async (dispatch) => {
  try {
    const request = await axios.get(
      `${process.env.REACT_APP_API_GARENA}_/items/sea_scholarship_univ?access_token=${process.env.REACT_APP_ACCESS_API_GARENA}&fields=*.*`
    );
    const data = request.data;
    dispatch(universityFetchDataSuccess(data));
  } catch (e) {
    dispatch(universityHasError(e));
  }
};

export function facultyHasError(err) {
  return {
    type: "FACULTY_PARTNER_HAS_ERRORED",
    error: err
  };
}

export function facultyIsLoading(bool) {
  return {
    type: "FACULTY_PARTNER_IS_LOADING",
    loading: bool
  };
}

export function facultyFetchDataSuccess(items) {
  return {
    type: "FACULTY_PARTNER_FETCH_DATA_SUCCESS",
    payload: {
      ...items
    },
    loading: false
  };
}

export const facultyFetchData = () => async (dispatch) => {
  try {
    const request = await axios.get(
      `${process.env.REACT_APP_API_GARENA}_/items/sea_scholarship_faculty?access_token=${process.env.REACT_APP_ACCESS_API_GARENA}&fields=*.*`
    );
    const data = request.data;
    dispatch(facultyFetchDataSuccess(data));
  } catch (e) {
    dispatch(facultyHasError(e));
  }
};
