export interface UserLogin {
  username: string
  password: string
}

export interface IUserInfo {
  name?: string
  age?: number
}
export interface IUserInfosSlice {
  userInfo: IUserInfo
  token: string
}
