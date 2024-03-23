import React from 'react';

const Card = (props) => {
    return (
        <>
            <div class="w-72 my-5">
                <div className="overflow-hidden rounded-xl"><img class=" object-cover  w-72 h-40 transition duration-400 hover:scale-110" src={props.src} alt=''/></div>
                {props.title ? <p class="text-2xl font-semibold mt-5">{props.title}</p>: ""}
                <p class="text-gray-500 mt-4">{props.text}</p>
                <div class="mt-4 flex flex-row">
                    <p class="inline pr-2 ">Download Pdf</p>
                    <button class="transition duration-400 hover:scale-110 active:opacity-50">
                        <img class="w-7" src="/resource/icons/Download.svg" alt=''/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card