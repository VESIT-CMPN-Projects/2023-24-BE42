import React from 'react'

export const UserImage = ({imagePath}) => {
  return (
    <div >
      <img className="rounded-full w-32 h-32" src={imagePath} alt="profile_image"/>
    </div>

  )
}
