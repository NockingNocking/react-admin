import { ChangeEvent, useCallback, useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import '@/style/components/login/loginForm.less'
import type { UserLogin } from '@/types'
import { checkUserName, checkUserPassword } from '@/utils'
import { useRequest, useAppSelector, useAppDispatch } from '@/hooks'
import { updateUserInfo, updateToken } from '@/store'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    username: '17623529360',
    password: 'zxzx12123'
  })

  const [get, post] = useRequest()

  const router = useNavigate()

  // 获取输入数据
  const userNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserLogin({
        ...userLogin,
        username: e.target?.value
      })
    },
    [userLogin]
  )
  const userPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserLogin({
        ...userLogin,
        password: e.target?.value
      })
    },
    [userLogin]
  )
  // 验证错误
  const [userError, setUserError] = useState<boolean>(true)
  const [passwordError, setPasswordError] = useState<boolean>(true)
  useUpdateEffect(() => {
    setUserError(checkUserName(userLogin.username))
  }, [userLogin.username])
  useUpdateEffect(() => {
    setPasswordError(checkUserPassword(userLogin.password))
  }, [userLogin.password])
  // redux 存储全局用户信息数据
  const userInfo = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  // 提交数据
  const submit = async () => {
    if (!checkUserName(userLogin.username)) {
      setUserError(checkUserName(userLogin.username))
    }
    if (!checkUserPassword(userLogin.password)) {
      setPasswordError(checkUserPassword(userLogin.password))
    }

    if (checkUserName(userLogin.username) && checkUserPassword(userLogin.password)) {
      const {
        data: { code, list, token }
      } = await post('/user/login')
      if (code === 200) {
        dispatch(updateUserInfo(list))
        dispatch(updateToken(token))
        message.success('登陆成功！')
        router('/main')
      } else {
        message.warning('登陆失败！')
      }
    }
  }
  // 注册新用户
  const register = () => {
    console.log(userInfo)
  }
  return (
    <>
      <div className="login-form-container">
        <div className="form-box">
          <div className="box-logo"></div>
          <div className="box-title">Login...</div>
          <div className={['box-inputs box-user', userError === true ? null : 'error'].join(' ')}>
            <label htmlFor="user">User</label>
            <input
              onChange={(e) => userNameChange(e)}
              type="text"
              name="user"
              value={userLogin.username}
              placeholder="Your UserName ..."
            />
          </div>
          <div
            className={['box-inputs box-password', passwordError === true ? null : 'error'].join(
              ' '
            )}
          >
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => userPasswordChange(e)}
              type="password"
              name="password"
              value={userLogin.password}
              placeholder="Your Password ..."
            />
          </div>
          <div className="box-operation">
            <div onClick={() => submit()} className="operation-button box-login">
              Login
            </div>
            <div
              onClick={() => {
                register()
              }}
              className="operation-button box-register"
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
