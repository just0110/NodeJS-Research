import axios from 'axios'
import { ACCOUNT_TYPES } from "./account";

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys')
  dispatch({ type: ACCOUNT_TYPES.fetchUser, payload: res.data })
};
