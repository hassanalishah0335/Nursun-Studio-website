import React from 'react'

const LastCard = (props) => {
    return (
            <div class="my-10 flex flex-col">
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50 font-bold pb-5">{props.t1}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t2}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t3}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t4}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t6}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t7}</button>
                <button class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t8}</button>
            </div>
    )
}

export default LastCard
