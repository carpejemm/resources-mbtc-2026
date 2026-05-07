import { useEffect } from "react"

const AnotherComponent = () => {
  useEffect(() => {
    console.log('AnotherComponent has mounted!')

    return () => {
      console.log('AnotherComponent is unmounting!')
    }
  }, [])

  return (
    <div>
      <h2>Another Component</h2>
    </div>
  )
}

export default AnotherComponent