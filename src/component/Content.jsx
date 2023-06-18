import React from 'react'
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import themeContext from '../context/themeContext'

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter renderprops={(count, increamentCount) => (
        <themeContext.Consumer>{({ theme, changeTheme }) =>
          <HoverCounter count={count} increamentCount={increamentCount} theme={theme} changeTheme={changeTheme} />}
        </themeContext.Consumer>
      )} />
    </div>
  )
}


