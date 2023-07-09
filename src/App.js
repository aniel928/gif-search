import React, { useEffect, useState } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";
import axios from 'axios';

function App() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState('coffee');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let activeFetch = true;
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hpJTDJ7Ploz7Ax17GAawRL5VgMhqk6Km&limit=24&rating=g`)
            .then(response => {
                if (activeFetch) {
                    setGifs(response.data.data);
                    setLoading(false);
                }
            })
            .catch(function (error) {
                console.log("Error fetching and parsing", error);
            });

        return () => { activeFetch = false };
    }, [query])

    const handleQueryChange = (query) => {
        setQuery(query);
    }

    return (
        <div>
            <div className="main-header">
                <div className="inner">
                    <h1 className="main-title">GifSearch</h1>
                    <SearchForm
                        search={handleQueryChange}
                    />
                </div>
            </div>
            <div className="main-content">
                {(loading)
                    ? <p>Loading ...</p>
                    : <GifList gifs={gifs} />
                }
            </div>
        </div>
    );
}

export default App;
