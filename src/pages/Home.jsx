import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'
import Track from '../components/Track'
import Testimonial from '../components/Testimonial'

import { Link } from 'react-router-dom'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <div className="flex justify-center -mt-30 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home