import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalSetting } from '@/types'

const initialState: IGlobalSetting = {
  isLoading: false,
  activeMenu: ''
}

export const globalSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    // 更新全局loading状态
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    // 更新全局活跃菜单
    updateActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload
    }
  }
})

export const { updateIsLoading, updateActiveMenu } = globalSlice.actions

export default globalSlice.reducer
