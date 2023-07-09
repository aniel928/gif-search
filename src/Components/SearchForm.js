import React, { useRef } from 'react';

const SearchForm = props => {
    const searchText = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        props.search(searchText.current.value);
        searchText.current.value = '';
    }

    return (
        <form className="search-form" onSubmit={e => handleSubmit(e)} >
            <label className="is-hidden" htmlFor="search">Search</label>
            <input type="search"
                name="search"
                placeholder="Search..."
                ref={searchText} />
            <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
    );
}

export default SearchForm;