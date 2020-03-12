import React from 'react'

export default function Title({name}) {
    return (
        <div className='row '>
            <div className="col mx-auto my-2 text-center-title ">
                <h1 className="font-weight-bold border-bottom border-dark">{name}</h1>
            </div>
        </div>
    )
}
