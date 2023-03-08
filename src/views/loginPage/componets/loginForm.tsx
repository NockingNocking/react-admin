import { ChangeEvent, useCallback, useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import '@/style/components/login/loginForm.less'
import type { UserLogin } from '@/types'
import { doLogin } from '@/api/modules/user'
import { checkUserName, checkUserPassword } from '@/utils'

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    username: '',
    password: ''
  })

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
        data: { code, list }
      } = await doLogin(userLogin)

      if (code === 200) {
        console.log(list)
      }
    }
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
              placeholder="Your Password ..."
            />
          </div>
          <div className="box-operation">
            <div onClick={() => submit()} className="operation-button box-login">
              Login
            </div>
            <div className="operation-button box-register">Register</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
