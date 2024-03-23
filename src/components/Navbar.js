import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

const [click, setclick] = useState(false)

function toggleMenu (){
    setclick(!click);
}
    
    return (
        <>
            <navbar className= "h-14 bg-black flex justify-between items-center  rounded-full mt-5 mx-[5%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] z-[2] fixed w-[90%]" >
                <div>
                    <Link to='/' className=  "pl-2 pt-1 hover:opacity-70 active:opacity-50 inline-block"><img className="w-40 rounded-full"
                        src="resource/icons/narsun1_logo.png" alt=""/></Link>
                </div>
                <ul className={click ? "flex-col bg-black  w-full  absolute top-[60px] left-[3px] rounded-xl" :"lg:flex items-center justify-center hidden"}>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/Experties" className="text-gray-400 ">Experties</Link></li>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/Portfolio" className="text-gray-400 ">Portfolio</Link></li>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/Product" className="text-gray-400 ">Product</Link></li>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/Learn" className="text-gray-400 ">Learn</Link></li>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/PitchDesk" className="text-gray-400 ">PitchDesk</Link></li>
                    <li className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer"><Link to="/Company" className="text-gray-400 ">Company</Link></li>
                </ul>
                <navLink className="lg:flex items-center hover:opacity-70 active:opacity-50 pr-[1%] hidden">
                    <p className="text-white pr-3 ">Hire Us</p>
                    <img className="w-9" src="resource/icons/Send-icon.svg" alt="" />
                </navLink>
                <div className= "lg:hidden">
                    <button onClick={toggleMenu} className="hover:opacity-70 active:opacity-50 cursor-pointer"><span class={ click ? "text-gray-300  text-3xl pr-4 fa fa-times" : " text-gray-300  text-3xl pr-4 fa fa-bars"}></span></button>
                </div>
                
            </navbar>
        </>
    )
}

export default Navbar
