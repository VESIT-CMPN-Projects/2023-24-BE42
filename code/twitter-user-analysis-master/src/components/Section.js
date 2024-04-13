import React from 'react'

export const Section = ({ children, classes}) => {
  return (
    <div className={`py-20 ${classes}`}>{children}</div>
  )
}
