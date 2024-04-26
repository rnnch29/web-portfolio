import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { social } from '../data/social'
 
function Home() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen" data-aos='fade-down' id='home'>
            <p className='text-center text-xl md:text-5xl lg:text-3xl'>Hello, My name is</p>
            <p className='text-gradient text-center text-5xl md:text-5xl lg:text-7xl'>RONNACHAI BUTHPLOENG</p>

            <div>
                <TypeAnimation
                    sequence={[
                        1000,
                        "I'm a Web developer",
                        2000,
                        "I enjoy building user-friendly interfaces",
                        2000,
                    ]}
                    wrapper="span"
                    speed={10}
                    className='text-m
            sm:xl md:text-3xl lg:text-5xl text-center'
                    repeat={Infinity}
                />
            </div>

            <div className="flex gap-7 items-center content-center mt-5 text-4xl">
                {social.map((e, i)=> (
                <a href={e.link} target='_blank' key={i}>
                    <FontAwesomeIcon icon={e.icon} className='icon' />
                </a>
                ))}
            </div>

            {/* <a href="" target='_blank' className='btn-view flex content-center items-center'>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>View Resume</span>
            </a> */}

        </div>
    )
}

export default Home