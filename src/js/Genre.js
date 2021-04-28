import React, { useState } from 'react'
import Select from 'react-select'

function Genre(props) {

    const uniqueGenres = new Set()
    props.data.media.map(item => {
        item.genre.forEach(uniqueGenres.add, uniqueGenres);
    })

    const genres = Array.from(uniqueGenres).map(genre => {
        return (
            {value: genre,
            label: genre}
        )
    })

    var handleChange = (selectedGenres) => {
        props.genresUpdate(selectedGenres)
    }
    

    return (
        <div className="genre-drop">
            <Select isMulti 
                    isSearchable
                    options={genres} 
                    displayValue="Genre"
                    onChange={handleChange}
                    placeholder="GENRE"
                    value={props.selectedGenres} />
        </div>
    )
}

export default Genre