import React from 'react';

const Photo = ({data}) => {
    return (
        <li>
            <img src={data.urls.regular} alt={data.alt_description} />
        </li>
    )
}

export default Photo;