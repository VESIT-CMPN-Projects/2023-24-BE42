import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:p-6 bg-gray-900 dark:border-gray-600 text-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{(new Date()).getFullYear()} <Link to="/" className="hover:underline">Profilysis&trade;</Link>. All Rights Reserved.
        </span>
    </footer>

  )
}
