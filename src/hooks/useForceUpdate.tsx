import { useState, useEffect } from 'react'

const UseForceUpdate = () => {
  const [refresh, setRefresh] = useState(false)

  const forceUpdate = () => {
    setTimeout(() => setRefresh((pre) => !pre))
  }

  useEffect(() => {
    forceUpdate()
    console.log(refresh)
  }, [refresh])

  return [forceUpdate]
}

export default UseForceUpdate
