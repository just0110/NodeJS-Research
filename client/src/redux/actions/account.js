import axios from 'axios'
import { createTypes } from 'redux-compose-reducer'

export const TYPES = createTypes('auth', ['fetchUser', 'login'])


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: TYPES.fetchUser, payload: res.data })
};
