import { SET_PROFILE, SET_TOKEN, SET_ROLE, SET_ERROR, LOGIN } from './Types';

function AuthReducer(state, { type, payload }) {
  switch (type) {
    case SET_PROFILE:
      return { ...state, profile: payload };
    case SET_TOKEN:
      return { ...state, token: payload.token };
    case SET_ROLE:
      return { ...state, role: payload.role };
    case LOGIN:
      return {
        ...state,
        token: payload.token,
        role: payload.role,
        authenticated: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          msg: payload?.msg || '',
          err: payload?.err || {}
        }
      };
    default:
      return { ...state };
  }
}

export default AuthReducer;
