import React from 'react'

export const SectionDescription = ({description,classes}) => {
  return (
    <p className={`text-center text-gray-600 sm:text-lg dark:text-slate-200 pb-8 ${classes}`}>{description}</p>

  )
}
