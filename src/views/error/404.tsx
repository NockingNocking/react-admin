import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const FzfPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="页面丢失..."
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            返回首页
          </Button>
        }
      />
    </>
  )
}

export default FzfPage
