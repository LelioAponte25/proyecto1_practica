import React from 'react'

const ImageInfo = ({infoApi}) => {
    return (
    <article>
        <h2>{infoApi?.title}</h2>
        <h3>{infoApi?.date}</h3>
        <p className='explanation' >{infoApi?.explanation}</p>
        <img src={infoApi?.hdurl} alt="" />
        <h3>{infoApi?.copyright}</h3>
    </article>
)
}

export default ImageInfo