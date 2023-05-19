import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const useHover = (onHover) => {
  const element = useRef()
  useEffect(() => {
    // componentDidMount, componentDidUpdate
    if (element.current) {
      element.current.addEventListener('mouseenter', onClick)
    }
    //componentWillUnMount
    return () => {
      if (element.current)
        element.current.removeEventListener('mouseenter', onClick)
    }
  }, [])
  return element
}

const App = () => {
  const sayHello = () => console.log('say hello')
  const title = useHover()
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
