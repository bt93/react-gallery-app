import React from 'react';

// Displays images fetched from PhotoContainer
const Photo = ({data}) => {
    return (
        <li>
            <img src={data.urls.regular} alt={data.alt_description} />
        </li>
    )
}

export default Photo;