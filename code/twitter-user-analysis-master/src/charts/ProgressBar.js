import React from 'react'

export const ProgressBar = ({progress, description}) => {
  return (
    <div className="flex mx-56 mb-5 dark:text-white">
      <div className="basis-3/12 self-stretch">
        <p>{ description}</p>
      </div>
      <div className="basis-3/12 self-stretch">
        <p className='text-end'>{progress} / 100</p>
      </div>
      <div className="basis-6/12 self-stretch ms-3 mt-1">
        <div className="h-4 mb-3 bg-gray-200 rounded-sm dark:bg-gray-700">
          <div className="h-4 bg-primary-800 rounded-sm dark:bg-primary-800" style={{width: `${progress}%`}}></div>
        </div>
      </div>
    </div>
    
  )
}
