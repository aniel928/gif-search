import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {
    const renderGifs = () => {
        if (props.gifs.length) {
            return props.gifs.map((gif, i) => (<Gif key={gif.id} gif={gif} />));
        }

        return <NoGifs />
    }

    return (
        <ul className="gif-list">
            {renderGifs()}
        </ul>
    );
}

export default GifList;
