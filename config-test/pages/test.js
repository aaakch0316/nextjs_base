import React from "react"
import TestComponent from "../components/TestComponent"
import TestContainer from "../containers/TestContainer"

const Home = () => {
  // console.log(global)
  console.log('start')
  return (
    <>
      test
      <TestComponent />
      <TestContainer />
    </>
  )
}

export default Home