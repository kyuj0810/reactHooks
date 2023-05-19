import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const useClick = (onClick) => {
  const element = useRef()
  useEffect(() => {
    // componentDidMount, componentDidUpdate
    if (element.current) {
      element.current.addEventListener('click', onClick)
    }
    //componentWillUnMount
    return () => {
      if (element.current) element.current.removeEventListener('click', onClick)
    }
  }, [])
  return element
}

const App = () => {
  const sayHello = () => console.log('say hello')
  const title = useClick()
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
