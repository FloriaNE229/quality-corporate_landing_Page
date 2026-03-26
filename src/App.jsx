import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import StatsBand from './components/StatsBand'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

import Login from './auth/Login'
import Register from './auth/Register'
import Forgot from './auth/Forgot'

import Explorer from './pages/Explorer'
import Prestataires from './pages/Prestataires'

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <HowItWorks />
      <Services />
      <StatsBand />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/explorer"       element={<Explorer />} />
        <Route path="/prestataires"   element={<Prestataires />} />
        <Route path="/auth/login"     element={<Login />} />
        <Route path="/auth/register"  element={<Register />} />
        <Route path="/auth/forgot"    element={<Forgot />} />
      </Routes>
    </>
  )
}