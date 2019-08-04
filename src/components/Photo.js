import React from 'react';

const Photo = ({data}) => {
    return (
        <li>
            <img src={`${data.urls.regular}`} alt="" />
        </li>
    )
}

export default Photo;