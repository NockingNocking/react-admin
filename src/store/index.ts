import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './modules/userInfoSlice'
import globalSlice from './modules/globalState'

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    global: globalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export * from './modules/userInfoSlice'
export * from './modules/globalState'

export default store
