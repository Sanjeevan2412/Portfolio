import React from 'react'
import ReactDOM from 'react-dom/client'
// import Landing from './Landing/Landing.jsx'
// import Projects from './Projects/Projects.jsx'
// import Skills from './Skills/Skills.jsx'
// import Contact from './Contact/Contact.jsx'
import Pages from './Pages.jsx'
import './main.css'

// Font
import '@fontsource-variable/josefin-sans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Landing />
    <Projects />
    <Skills />
    <Contact /> */}
    <Pages />
  </React.StrictMode>,
)
