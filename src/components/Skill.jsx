import React from 'react'
import { skills } from '../data/skills'

function Skill() {
    return (
        <div className='text-center py-20 px-10 flex flex-col gap-5' id='skills'>
            <div>
                <p className='title' data-aos='fade-right'>My Skills</p>
                <div data-aos='fade-left'>
                    <p className='my-5 text-xl font-bold'>Front-end</p>
                    <div className="flex gap-5 justify-center flex-wrap">
                        {skills.frontend.map((e, i) => (
                            <img key={i} src={e.img} alt={e.name} className='icon-skill' />
                        ))}
                    </div>
                </div>
                <div data-aos='fade-right'>
                    <p className='my-5 text-xl font-bold'>Back-end</p>
                    <div className="flex gap-5 justify-center flex-wrap">
                        {skills.backend.map((e, i) => (
                            <img key={i} src={e.img} alt={e.name} className='icon-skill' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill