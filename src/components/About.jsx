import React from 'react'
import aboutImg from '../assets/memoji/like-transformed.png'

function About() {
    return (
        <div id='about'>
            <div className="max-w-7xl mx-auto grid grid-rows py-20 lg:grid-cols-2 overflow-hidden">

                <div className="flex items-center justify-center lg:justify-end" data-aos='fade-right'>
                    <img src={aboutImg} alt="" className='w-[500px]'/>
                </div>

                <div className="text-center content-center p-10 lg:text-start" data-aos='fade-left'>
                    <span className='title bg-blue-500 px-5 rounded'>About Me</span>
                    <p className='text-2xl font-bold text-blue-500'>Web Developer</p>

                    <p className='text-xl'>
                        Hello! I'm Ronnachai Buthploeng, but you can call me "Gong" I'm {new Date().getFullYear() - 2001} years old and graduated in Computer Science from Naresuan University. I'm ready to learn new technologies and work as part of a team.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About