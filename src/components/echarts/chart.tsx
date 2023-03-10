import * as echarts from 'echarts/core'
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef } from 'react'
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | LegendComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent
])

interface IChartProps {
  // TODO: 不同图形需要不同约束
  options: any
}

const Chart = ({ options }: IChartProps) => {
  const chartRef = useRef(null)
  let chartInstance: echarts.ECharts | null = null

  const paintChart = () => {
    try {
      const renderedInstance = echarts.getInstanceByDom(chartRef.current as unknown as HTMLElement)
      if (renderedInstance) {
        chartInstance = renderedInstance
      } else {
        chartInstance = echarts.init(chartRef.current as unknown as HTMLElement)
      }
      chartInstance.setOption(options)
    } catch (error) {
      console.error('error', error)
      chartInstance && chartInstance.dispose()
    }
  }

  const resizeHandler = () => {
    chartInstance?.resize()
  }

  // 页面初始化时，开始渲染图表
  useEffect(() => {
    paintChart()

    return () => {
      chartInstance && chartInstance.dispose()
    }
  }, [])

  // 监听窗口大小改变
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <>
      <div style={{ height: '100%', width: '100%' }} ref={chartRef} />
    </>
  )
}

export default Chart
