import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducers from '../features/userSlice'
const allReducers = combineReducers({
    currentUser: userReducers,
})
export const store = configureStore({
    reducer: allReducers,
})
