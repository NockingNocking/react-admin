import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalSetting } from '@/types'

const initialState: IGlobalSetting = {
  isLoading: false
}

export const globalSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    // 更新全局loading状态
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { updateIsLoading } = globalSlice.actions

export default globalSlice.reducer
