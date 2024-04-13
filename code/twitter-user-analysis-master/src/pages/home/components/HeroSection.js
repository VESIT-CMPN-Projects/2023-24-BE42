import React from 'react'
import FlatIllustration from '../../../assets/hero-section-img-2.png'
import { Section } from '../../../components/Section'

export const HeroSection = () => {
  return (
    <Section>
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 dark:bg-slate-800 bg-white">
      <div className=" text-gray-700 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover Insights, Ignite Engagement: Unleashing Twitter Profiling with Profylisis</h2>
          <p className="mb-4">Transform your approach to engagement with Profylisis – your go-to solution for in-depth Twitter profile analysis. Gain valuable insights into your audience, understand trending topics, and optimize your strategy for maximum impact</p>
          <p>Elevate your outreach game and stay steps ahead in the dynamic world of social media with Profilysis at your fingertips</p>
      </div>
      <div className="grid grid-cols-1  gap-4 ">
          <img className="mt-12 w-full lg:mt-10 rounded-lg" src={FlatIllustration} alt='flat-illustration'/>
      </div>  
    </div>
    </Section>
  )
}
