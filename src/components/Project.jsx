import React from 'react'
import { projects } from '../data/projects'

function Project() {
  return (
    <div className='py-20  text-center' id='projects'>
      <span className='title'>My Projects</span>

      {/* Card Project */}
      <div className="mx-auto mt-10 grid grid-cols gap-5 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl " data-aos='fade-left'>
        {projects.map((project, i) => (
          <a href={project.link} key={i} target='_blank' className="mx-auto bg-[#535353] bg-opacity-20 overflow-hidden rounded-xl w-[300px] h-[420px] shadow-xl transition duration-300 hover:scale-105">
            <div className="h-[50%] p-3">
              <img src={project.img} alt={project.name}
                className='h-full w-full object-cover rounded-xl' />
            </div>
            <div className="p-3 flex flex-col gap-3">
              <div className="h-[120px]">
                <p className='text-xl font-bold'>{project.name}</p>
                <p className='text-[#b3b3b3]'>{project.describe}</p>
              </div>
              <div className="bg-[#535353] h-[1px] w-full"></div>
              <div className="flex gap-3 justify-center flex-wrap">
                {project.stack.map((stackItem) => (
                  <img src={stackItem} alt="" className='max-w-[35px] bg-[#535353] p-1 rounded-full' />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>

  )
}

export default Project