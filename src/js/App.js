import React, { Component } from 'react'
import TitlesList from './TitlesList';
import Search from './Search'
import Genre from './Genre'
import Year from './Year'
import Type from './Type'
import 'regenerator-runtime/runtime'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            selectedGenres: [],
            selectedYears: [],
            selectedType: '',
            data: null
        }
    }

    filterUpdate(value){
        this.setState({
            filterText: value
        })
    }

    genresUpdate(values){
        this.setState({
            selectedGenres: values
        })
    }

    yearsUpdate(values){
        this.setState({
            selectedYears: values
        })
    }

    typeUpdate(value){
        this.setState({
            selectedType: value
        })
    }

    clearFilters(){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        this.setState({
            filterText: '',
            selectedGenres: [],
            selectedYears: [],
            selectedType: ''     
        })
    }


    async componentDidMount(){
        const url = 'https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({data:data})
    }

    render(){
        
        if (this.state.data != null){
            return (
                <div>
                    
                    <Genre data={this.state.data} genresUpdate={this.genresUpdate.bind(this)} selectedGenres={this.state.selectedGenres} />
                    <Year data={this.state.data} yearsUpdate={this.yearsUpdate.bind(this)} selectedYears={this.state.selectedYears} />
                    <Search filterUpdate={this.filterUpdate.bind(this)} />
                    <Type selectedType={this.state.selectedType} typeUpdate={this.typeUpdate.bind(this)} />
                    <button onClick={this.clearFilters.bind(this)} >CLEAR FILTERS</button>
                    <TitlesList data={this.state.data} 
                                filterText={this.state.filterText} 
                                selectedGenres={this.state.selectedGenres}
                                selectedYears={this.state.selectedYears}
                                selectedType={this.state.selectedType} />
                </div>
            )
        } else {
            return (
                <div>LOADING...</div>
            )
        }
    }

}

export default App;