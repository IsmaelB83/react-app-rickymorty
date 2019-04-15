// Node imports
import React, { Component } from 'react';
// Own imports
import Card from './Card';
// CSS imports
import './RickMorty.css';
// Assets imports
import logo from './spinner.gif';

export default class Personaje extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        loading: true,
        success: false,
        character: {}
      }
    }
    
    componentWillMount() {
    }
    
    render() {
      return (
          <div>
              <div className="card-container">
              { this.state.loading && 
                <div className="card-container">
                  <div>
                    <img src={logo} alt="loading..." />
                    <h2>Loading data...</h2>
                  </div>
                </div>
              }
              { !this.state.loading && 
                !this.state.success && 
                <h1>El personaje no existe</h1>
              }
              { !this.state.loading && 
                this.state.success &&
                <Card key={this.state.character.id} id={this.state.character.id} name={this.state.character.name} status={this.state.character.status} 
                      created={this.state.character.created} image={this.state.character.image} species={this.state.character.species}
                      gender={this.state.character.gender} origin={this.state.character.origin.name} last={this.state.character.location.name}/>
              }
            </div>
          </div>
      );
    }
  
    componentDidMount() {
      this.retrieveCharacter(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`);
    }
   
    async retrieveCharacter(path) {
      try {
          // Consume API
          let url = new URL(path), result = {};
          let response = await fetch(url);   
          if (response.status === 200) {
            result.loading = false;
            result.success = true;
            result.character = await response.json();
          } else {
            console.log('404');
            result.loading = false;
            result.success = false;
            result.character = {}
          }
          // Update current state
          this.setState(result);
      } catch (error) {
          console.log(error);
      }
    }  
  }