import { createSlice } from '@reduxjs/toolkit'
const initialState: InitalStateType = {
    user: {
        _id: '',
        name: '',
        username: '',
        email: '',
        imagePath: '',
    },
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addData: (
            state: InitalStateType,
            action: { payload: typeof initialState.user }
        ) => {
            const { user } = state
            user._id = action.payload._id
            user.name = action.payload.name
            user.username = action.payload.username
            user.email = action.payload.email
            user.imagePath = action.payload.imagePath
        },
    },
})
export const { addData } = userSlice.actions
export default userSlice.reducer
