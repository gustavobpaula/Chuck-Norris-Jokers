import Jokes from '../../config/api/Jokes';

/**
 *  Actions Types
 */
export const Types = {
  FETCH_REQUEST: 'random/FETCH_REQUEST',
  FETCH_FAILURE: 'random/FETCH_FAILURE',
  FETCH_SUCCESS: 'random/FETCH_SUCCESS',
};

/**
 * Reducer
 */
const initialState = {
  loading: false,
  error: false,
  payload: {},
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
  fetchRandomRequest: () => ({
    type: Types.FETCH_REQUEST,
  }),

  fetchRandomSuccess: payload => ({
    type: Types.FETCH_SUCCESS,
    payload,
  }),

  fetchRandomFailure: payload => ({
    type: Types.FETCH_FAILURE,
    payload,
  }),

  fetchRandomByCategory: (dispatch, category) => {
    dispatch(Creators.fetchRandomRequest());

    Jokes.random(category)
      .then(response => {
        dispatch(Creators.fetchRandomSuccess(response.data));
      })
      .catch(() => {
        dispatch(Creators.fetchRandomFailure());
      });
  },
};
