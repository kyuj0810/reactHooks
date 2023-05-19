import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle
}

const App = () => {
  const titleUpdator = useTitle('Loading...')
  setTimeout(() => titleUpdator('Home'), 5000)
  return <div className="App"></div>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
