import React, { Component } from 'react'

class TitlesList extends Component {
    render() {

        const {data, filterText, selectedGenres, selectedYears, selectedType} = this.props

        const titles = data.media
            // Filter by title
            .filter(item => {
                return item.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 

            })
            // Filter by year
            .filter(item => {
                if (selectedYears.length > 0){
                    for (var i = 0 ; i < selectedYears.length ; i++){
                        if (selectedYears[i].value === item.year){
                            return true;
                        }
                    }
                    return false;
                }
                return true;
            })
            // Filter by genre
            .filter(item => {
                if (selectedGenres.length > 0){
                    for (var i = 0 ; i < item.genre.length ; i++){
                        for (var j = 0 ; j < selectedGenres.length ; j++){
                            if (selectedGenres[j].value === item.genre[i]){
                                return true;
                            }
                        }
                    }
                    return false;
                }
                return true;
            })
            // Filter by type (movies or books)
            .filter(item => {
                if (selectedType === ""){
                    return true;
                }
                if (selectedType.toLowerCase() === item.type.toLowerCase()){
                    return true;
                }
                return false;            
            })
            // Sort by title
            .sort((a, b) => a.title > b.title ? 1 : -1)
            // Map to html component
            .map(item => {
                return (
                <div className="card">
                    <img src={item.poster} className="card-img"/>
                    <div className="container">
                        <h4><b>{item.title} ({item.year})</b></h4>
                        <p>Genres: {item.genre.join(", ")}</p>
                    </div>
                </div>
            )})

        return (
            <div className="titleList">
                {titles}
            </div>
        )
    }
}
export default TitlesList