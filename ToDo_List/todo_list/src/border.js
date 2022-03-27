import React from 'react'

const Border = (props) => {
    const {children} = props

    return (
        <div className='blackBorder'>
            {children}
        </div>


    )
}

export default Border