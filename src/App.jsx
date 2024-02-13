import './App.css'
import Skills from './Skills/Skills'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
      </div>


    </>
  )
}

export default App
