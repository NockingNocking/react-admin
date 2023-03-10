import { Card, Divider, Tabs } from 'antd'
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
  // 卡片图表数据
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
  // tabs图表数据
  const tabs = [
    {
      label: '2021年数据',
      key: '2021'
    },
    {
      label: '2022年数据',
      key: '2022'
    },
    {
      label: '2023年数据',
      key: '2023'
    }
  ]
  const onTabsChange = () => {
    console.log(123)
  }

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
              style={{ width: 300, boxShadow: '0 0 29px 6px rgb(62 66 66 / 26%)' }}
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
      <Tabs style={{ marginTop: 40 }} onChange={onTabsChange} type="card" items={tabs} />
    </>
  )
}

export default DashBordPage
