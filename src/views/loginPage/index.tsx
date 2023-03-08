import LoginForm from './componets/loginForm'
import '@/style/components/login/login.less'

const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <img src="src/assets/images/illustration.svg" />
        </div>
        <div className="login-center">
          <LoginForm />
        </div>
        <div className="login-right">
          <img src="src/assets/images/login-box-bg.svg" />
        </div>
      </div>
    </>
  )
}

export default LoginPage
