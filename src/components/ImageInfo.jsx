import React from 'react'

const ImageInfo = ({infoApi}) => {
    return (
    <article>
        <h2>{infoApi?.title}</h2>
        <h3>{infoApi?.date}</h3>
        <h2 className='explanation'>{infoApi?.explanation}</h2>
        <img src={infoApi?.hdurl} alt="" />
    </article>
)
}

export default ImageInfo