import { Card, Divider, message } from 'antd'
import '@/style/components/dashbord/index.less'
import { getCardDatas } from '@/api'
import { useEffect, useState } from 'react'

interface ICardDatas {
  title: string
  value: number
  icon: string
}

const DashBordPage = () => {
  const [cardDatas, setCardDatas] = useState<Array<ICardDatas>>()

  const doGetCardDatas = async () => {
    try {
      const { data } = await getCardDatas()
      setCardDatas(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    doGetCardDatas()
  }, [])

  return (
    <>
      <Divider orientation="left" style={{ fontSize: 24 }}>
        统计数据
      </Divider>
      {/* 卡片数据展示区域 */}
      <div className="card-container">
        {cardDatas?.map((item, index) => {
          return (
            <Card
              className="card"
              title={item.title}
              bordered={false}
              key={index}
              style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)', marginLeft: 65 }}
            >
              <div className={['icon', 'iconfont', item.icon].join(' ')}></div>
              <div className="content">
                <p>
                  {item.value}
                  <span>人次</span>
                </p>
              </div>
            </Card>
          )
        })}
      </div>
      {/* 图标区域展示区 */}
      <Divider orientation="left" style={{ fontSize: 24 }}>
        图表数据
      </Divider>
    </>
  )
}

export default DashBordPage
