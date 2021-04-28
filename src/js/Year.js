import React, { useState } from 'react'
import Select from 'react-select'

function Year(props) {

    const uniqueYears = new Set()
    props.data.media.map(item => { uniqueYears.add(item.year)
    })

    const years = Array.from(uniqueYears).map(year => {
        return (
            {value: year,
            label: year}
        )
    })

    var handleChange = (selectedYears) => {
        props.yearsUpdate(selectedYears)
    }
    

    return (
        <div className="year-drop">
            <Select isMulti 
                    isSearchable
                    options={years} 
                    isplayValue="Year"
                    onChange={handleChange}
                    placeholder="YEAR"
                    value={props.selectedYears} />
        </div>
    )
}

export default Year