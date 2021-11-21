import { useReducer } from "react";
import axios from "axios";

function useData({ namespace = "", host = "http://localhost:3001" }) {
  const initial = {
    response: null,
    error: null,
    loading: false,
  };

  const RESPONSE = `@@${namespace}/RESPONSE`;
  const LOADING = `@@${namespace}/LOADING`;
  const ERROR = `@@${namespace}/ERROR`;
  const RESET = `@@${namespace}/RESET`;

  const reducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
      case RESPONSE:
        return {
          response: payload,
          loading: false,
          error: null,
        };
      case LOADING:
        return {
          response: null,
          loading: true,
          error: null,
        };
      case ERROR:
        return {
          response: null,
          loading: false,
          error: payload,
        };
      case RESET:
        return initial;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  const getRequest = async ({ path, authorization = "" }) => {
    dispatch({ type: LOADING });

    try {
      const req = await axios.get(`${host}/${path}`, {
        headers: { authorization },
      });

      dispatch({ type: RESPONSE, payload: req.data });
    } catch (e) {
      dispatch({ type: ERROR, payload: e });
    }
  };

  const postRequest = async ({ path, authorization = "", body = {} }) => {
    dispatch({ type: LOADING });

    try {
      const req = await axios.post(`${host}/${path}`, {
        headers: { authorization },
        body,
      });

      dispatch({ type: RESPONSE, payload: req.data });
    } catch (e) {
      dispatch({ type: ERROR, payload: e });
    }
  };

  return {
    ...state,
    getRequest,
    postRequest,
  };
}

export default useData;
