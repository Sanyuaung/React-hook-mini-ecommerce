import React from 'react'

export default function Loader() {
    return (
        <div className='d-flex justify-content-center align-content-center p-5'><div className="spinner-grow bg-success " role="status">
            <span className="visually-hidden">Loading...</span>
        </div></div>
    )
}
