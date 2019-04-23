import { composeReducer } from 'redux-compose-reducer'
import update from 'update-js'


const initialState = {
  isLoading: false,
  isLoggedIn: null,
}


export const fetchUser = (state, { payload }) =>
  update.assign(state, {
    isLoggedIn: payload || false,
  })




export default composeReducer(
  'auth',
  {
    fetchUser,
  },
  initialState,
)
