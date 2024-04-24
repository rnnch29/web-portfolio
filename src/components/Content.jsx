import React from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skill from './Skill'

function Content() {
  return (
    <div className="overflow-hidden">
        <Home />
        <About />
        <Skill />
        <Project />
    </div>
  )
}

export default Content