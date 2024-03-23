import React from 'react'
import { Link } from 'react-router-dom'

const IdeaSection = () => {
    return (
        <div className="bg-blue-50">
            <div className=" bg-gray-200 pl-[10%] pr-[3%] py-10 rounded-tl-3xl rounded-tr-3xl" >
                <p className="lg:text-6xl md:text-4xl text-3xl ">Have An Idea?</p>
                <p className=" lg:text-6xl md:text-4xl text-3xl inline-block">Lets Build And Scale It</p>
                <Link to="/Company" className="drop-shadow-[5px_5px_10px_rgba(0,0,0,0.7)] inline-block">
                    <img className= "lg:w-20 md:w-12 w-10 transition duration-400 hover:scale-110 active:opacity-50" src="/resource/icons/Arrow.svg" alt='' />
                </Link>
            </div>
        </div>
    )
}

export default IdeaSection
