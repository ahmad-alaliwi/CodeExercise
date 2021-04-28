import React, { Component } from 'react'

class Search extends Component {

    filterUpdate(){
        const searchVal = this.searchValue.value
        this.props.filterUpdate(searchVal)
    }

    render() {

        return (
            <form>
                <input type="text" className="search-field" 
                       ref={value => {this.searchValue = value}}
                       onChange={this.filterUpdate.bind(this)} />
                           <i className="fa fa-search"></i>
            </form>
        )
    }
}

export default Search;