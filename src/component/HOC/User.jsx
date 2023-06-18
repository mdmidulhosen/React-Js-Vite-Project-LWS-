import React from 'react'

function User({name}) {
  return (
    <div>
      {name(true)}
    </div>
  )
}

export default User
