const initialState = {
  payload: [],
  loading: true,
  error: null
};

export function contentWebsite(state = initialState, action) {
  switch (action.type) {
    case "CONTENT_WEBSITE_HAS_ERRORED":
      return {
        payload: null,
        loading: true,
        error: action.error
      };

    case "CONTENT_WEBSITE_IS_LOADING":
      return {
        payload: null,
        loading: action.loading,
        error: null
      };

    case "CONTENT_WEBSITE_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}

export function universityPartner(state = initialState, action) {
  switch (action.type) {
    case "UNIVERSITY_PARTNER_HAS_ERRORED":
      return {
        payload: null,
        loading: true,
        error: action.error
      };

    case "UNIVERSITY_PARTNER_IS_LOADING":
      return {
        payload: null,
        loading: action.loading,
        error: null
      };

    case "UNIVERSITY_PARTNER_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}

export function facultyPartner(state = initialState, action) {
  switch (action.type) {
    case "FACULTY_PARTNER_HAS_ERRORED":
      return {
        payload: null,
        loading: true,
        error: action.error
      };

    case "FACULTY_PARTNER_IS_LOADING":
      return {
        payload: null,
        loading: action.loading,
        error: null
      };

    case "FACULTY_PARTNER_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}

export function testimoni(state = initialState, action) {
  switch (action.type) {
    case "TESTIMONI_HAS_ERRORED":
      return {
        payload: null,
        loading: true,
        error: action.error
      };

    case "TESTIMONI_IS_LOADING":
      return {
        payload: null,
        loading: action.loading,
        error: null
      };

    case "TESTIMONI_FETCH_DATA_SUCCESS":
      return {
        payload: action.payload,
        loading: action.loading,
        error: null
      };
    default:
      return state;
  }
}
