import React, { Suspense } from 'react'
import { Spin } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      }>
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
