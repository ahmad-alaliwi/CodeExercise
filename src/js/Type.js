import React, { Component } from 'react'

class Type extends Component {

    handleChange = type => {
        this.props.typeUpdate(type.target.value)
    }

    render() {
            return (
                <div className="type-line">
                    <div className="radio-movie">
                        <label>
                            <input type="radio" value="movie" checked={this.props.selectedType == 'movie'} onChange={this.handleChange} />
                            Movies
                        </label>
                    </div>
                    <div className="radio-book">
                        <label>
                            <input type="radio" value="book" checked={this.props.selectedType == 'book'} onChange={this.handleChange} />
                            Books
                        </label>
                    </div>
                </div>
            )
    }

}

export default Type