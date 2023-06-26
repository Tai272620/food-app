import React from 'react'
import "./home.scss"
import Banner from './components/banner/Banner'
import Category from './components/category/Category'
import About from './components/about/About'

export default function Home() {
  return (
    <div>
        <Banner />
        <Category />
        <About />
    </div>
  )
}
