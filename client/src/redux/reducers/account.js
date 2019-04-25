import { composeReducer } from 'redux-compose-reducer'
import update from 'update-js'


const initialState = {
  auth: null,
};


export const fetchUser = (state, { payload }) =>
  update.assign(state, {
    auth: payload || false,
  });



export default composeReducer(
  'auth',
  {
    fetchUser,
  },
  initialState,
)
