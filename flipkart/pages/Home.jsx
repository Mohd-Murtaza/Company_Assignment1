import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import { BannerSlider } from '../components/BannerSlider'
import { Categories } from '../components/Categories'
import { GridBanner } from '../components/Grid'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Categories/>
      <BannerSlider/>
      <Slider/>
      <GridBanner/>
    </>
  )
}

export default Home
