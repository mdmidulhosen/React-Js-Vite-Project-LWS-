import React from 'react'
import Content from './Content'

export default function Section({theme}) {
  return (
    <div>
      <h1>This is a section</h1>
      <Content theme={theme}/>
      {console.log(theme)}
    </div>
  )
}


