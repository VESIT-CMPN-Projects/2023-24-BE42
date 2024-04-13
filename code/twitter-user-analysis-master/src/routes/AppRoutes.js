import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/HomePage'
import { Userpage } from '../pages/user/Userpage'
import { AnalysisPage } from '../pages/user/analysis/AnalysisPage'

export const AppRoutes = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      
      setIsLoading(false);
    },5000);

    return () => clearTimeout(timer);
  },[loading]);

  return (

    <Routes>
        <Route path='/' element={ <HomePage key='home_page' pageTitle='Home | Profilysis' apiPath='/' />}/>
        <Route path='/users' element={<Userpage key="user_page" pageTitle='User | Profilysis' loading={loading} />}/>
        <Route path='/users/analyse' element={<AnalysisPage key="analysis_page" pageTitle='User Analysis | Profilysis' loading={loading}/>}/>
    </Routes>
  )
}
