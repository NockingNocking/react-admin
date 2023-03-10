import { Card } from 'antd'
import '@/style/components/dashbord/index.less'

const DashBordPage = () => {
  return (
    <div className="dashbord-container">
      <Card
        title="Card title"
        bordered={false}
        style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)', marginLeft: 65 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        title="Card title"
        bordered={false}
        style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)', marginLeft: 65 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        title="Card title"
        bordered={false}
        style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)', marginLeft: 65 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        title="Card title"
        bordered={false}
        style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)', marginLeft: 65 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default DashBordPage
