import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserInfo, IUserInfosSlice } from '@/types'

const initialState: IUserInfosSlice = {
  userInfo: {
    name: '',
    age: 0
  },
  token: ''
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    // 更新用户信息
    updateUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload
    },
    // 更新token
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  }
})

export const { updateUserInfo, updateToken } = userInfoSlice.actions

export default userInfoSlice.reducer
