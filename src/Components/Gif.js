import React from 'react';

const Gif = props => (
    <li className="gif-wrap">
        <img
            type={props.gif.type}
            alt={props.gif.title}
            src={props.gif.images.fixed_height.url}
        />
    </li>
);

export default Gif;