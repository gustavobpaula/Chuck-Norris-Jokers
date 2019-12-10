import Jokes from '../../config/api/Jokes';

/**
 *  Actions Types
 */
export const Types = {
  FETCH_REQUEST: 'categories/FETCH_REQUEST',
  FETCH_FAILURE: 'categories/FETCH_FAILURE',
  FETCH_SUCCESS: 'categories/FETCH_SUCCESS',
};

/**
 * Reducer
 */
const initialState = {
  loading: false,
  error: false,
  payload: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case Types.FETCH_FAILURE:
      return {
        ...state,
        ...action,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  fetchCategoriesRequest: () => ({
    type: Types.FETCH_REQUEST,
  }),

  fetchCategoriesSuccess: payload => ({
    type: Types.FETCH_SUCCESS,
    payload,
  }),

  fetchCategoriesFailure: payload => ({
    type: Types.FETCH_FAILURE,
    payload,
  }),

  fetchCategories: dispatch => {
    dispatch(Creators.fetchCategoriesRequest());

    Jokes.categories()
      .then(response => {
        dispatch(Creators.fetchCategoriesSuccess(response.data));
      })
      .catch(() => {
        dispatch(Creators.fetchCategoriesFailure());
      });
  },
};
