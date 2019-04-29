import axios from 'axios'
import { createTypes } from 'redux-compose-reducer'

export const ACCOUNT_TYPES = createTypes('auth', ['fetchUser'])


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: ACCOUNT_TYPES.fetchUser, payload: res.data })
};


export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: ACCOUNT_TYPES.fetchUser, payload: res.data })
};
