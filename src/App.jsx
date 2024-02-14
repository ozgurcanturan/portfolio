import './App.css'
import Skills from './components/Skills/Skills'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
