import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
