import React from 'react'
import CountryCard from '../CountryCard';
import LastCard from '../LastCard';
import { countryCard } from './data';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const index = () => {
    return (
        <div className='bg-gray-200'>
            <div className="bg-gray-900 pl-[10%] pr-[2%] py-10 rounded-tl-3xl rounded-tr-3xl">
                <div className=' grid lg:grid-cols-4 md:grid-cols-2 mb-20'>
                    <CountryCard
                        src='/resource/icons/America.png'
                        country='USA'
                        address='1049 El Monte Avenue, Ste C #715, Mountain View, CA.'
                    />
                    <CountryCard
                        src='/resource/icons/SaudiaArabia.png'
                        size=" w-12"
                        country='KSA'
                        address='Kingdom of Saudi Arabia'
                    />
                    <CountryCard
                        src='/resource/icons/UAE.png'
                        country='UAE'
                        address='301, Vision Tower, Dubai'
                    />
                    <CountryCard
                        src='/resource/icons/Pakistan.png'
                        country='Pakistan'
                        address='44, Block R 1 Phase 2 Johar Town, Lahore'
                    />
                </div>
                <div class="border-b-2 border-white w-[95%]"></div>

                <div className=' grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mb-20'>
                    {countryCard.map(items => {
                        return (
                            <LastCard
                                t1={items.t1}
                                t2={items.t2}
                                t3={items.t3}
                                t4={items.t4}
                                t5={items.t5}
                                t6={items.t6}
                                t7={items.t7}
                                t8={items.t8}

                            />
                        )
                    })}
                </div>
                <div className="grid grid-cols-2  pr-12">
                    <img class="lg:w-28 w-20" src="/resource/icons/Narsun-logo.svg" alt='' />
                    <div>
                        <div className="text-gray-300  lg:text-6xl md:text-4xl text-xl text-end">Get In Touch{String.fromCharCode(8599)}</div>
                        <div className="text-white lg:text-lg md:text-base text-sm text-end">info@narsunstudio.comp</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 pr-12 pb-10">
                    <div className="text-white pt-3">2023 Narsun Studio. All Rights Recived</div>
                    <div className="flex flex-row md:justify-end justify-start md:pt-0 pt-5">
                        <button className="hover:opacity-70 active:opacity-50 md:px-2 pr-2 ">
                            <FaLinkedin size={40} color='gray'/>
                        </button>
                        <button className="hover:opacity-70 active:opacity-50 px-2">
                            <FaFacebook size={40} color='gray'/>
                        </button>
                        <button className="hover:opacity-70 active:opacity-50 px-2">
                            <FaInstagram size={40} color='gray'/>
                        </button>
                        <button className="hover:opacity-70 active:opacity-50 px-2">
                            <FaTwitter size={40} color='gray'/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index
