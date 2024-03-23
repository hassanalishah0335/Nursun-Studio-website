import React from 'react'

const CountryCard = (props) => {
    return (
        <div>
            <div className="flex items-center ">
                <img className={props.size} src={props.src} alt='' />
                    <div className="text-white pl-2">{props.country}</div>
            </div>
            <div className="text-gray-300 w-52">{props.address}</div>
        </div>
    )
}

export default CountryCard
