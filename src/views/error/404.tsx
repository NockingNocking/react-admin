import React from 'react'
import { Button, Result } from 'antd'

const FzfPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="页面丢失..."
    extra={<Button type="primary">返回首页</Button>}
  />
)

export default FzfPage
