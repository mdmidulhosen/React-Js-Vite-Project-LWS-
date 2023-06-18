import React from 'react'
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import ThemeContext from '../context/ThemeContext'

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter renderProps={(count, increamentCount) => (
          <ThemeContext.Consumer>{({theme})=><HoverCounter count={count} increamentCount={increamentCount} theme={theme}/>}</ThemeContext.Consumer>
        )} />
    </div>
  )
}


