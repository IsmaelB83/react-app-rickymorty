import React, { Component } from 'react';
import './CardCharacter.css';
import logo from './spinner.gif'


export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      characters: []
    }
  }
  
  componentWillMount() {
  }
  
  render() {
    if (this.state.loading === false) {
      return (
          <div>
            <div className="card-container-footer">
              <button name="prev" onClick={this.paginatorEventHandler.bind(this)}>Anterior</button>
              <h3>Pagina {this.state.page} de {this.state.pages}</h3>
              <button name="next" onClick={this.paginatorEventHandler.bind(this)}>Siguiente</button>
            </div>
            <div className="card-container">
              { this.state.characters.map( (ch, i) => 
                  <CharacterCard key={ch.id} id={ch.id} name={ch.name} status={ch.status} created={ch.created} 
                                image={ch.image} species={ch.species} gender={ch.gender} origin={ch.origin.name}
                                last={ch.location.name}/>
              )}
            </div>
            <div className="card-container-footer">
              <button name="prev" onClick={this.paginatorEventHandler.bind(this)}>Anterior</button>
              <h3>Pagina {this.state.page} de {this.state.pages}</h3>
              <button name="next" onClick={this.paginatorEventHandler.bind(this)}>Siguiente</button>
            </div>
          </div>
      );
    } else {
      return (
        <div className="card-container">
          <div>
            <img src={logo} alt="loading..." />
            <h2>Loading data...</h2>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.getCharacters()
    .then ( result => {
        this.setState( 
          { characters: result.results,
            loading: false,
            next: result.info.next,
            pages: result.info.pages,
            prev: result.info.prev,
            page: 1
          } 
        );
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {
  }
  
  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  async getCharacters() {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character/');       
        return await response.json();
    } catch (error) {
        console.log(error);
    }
  }

  async paginatorEventHandler(e) {
    try {
      let response, currentPage = this.state.page;
      // eslint-disable-next-line default-case
      switch (e.target.name) {
        case "prev":
          if (this.state.prev === "") return;
          response = await fetch(this.state.prev);
          currentPage--;
          break;
        case "next":
          if (this.state.next === "") return;
          response = await fetch(this.state.next);
          currentPage++;
          break;
      }
      let result = await response.json();
      this.setState( 
        { characters: result.results,
          loading: false,
          next: result.info.next,
          pages: result.info.pages,
          prev: result.info.prev,
          page: currentPage
        } 
      );
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }

}

export class CharacterCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      status: this.props.status,
      species : this.props.species,
      gender: this.props.gender,
      origin: this.props.origin,
      last: this.props.last,
      image: this.props.image
    };
  }
  
  componentWillMount() {
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.state.image} alt="character"></img>
          <div className="card-title">
            <h1>{this.props.name}</h1>
            <p><span>id: {this.props.id}</span> - <span>{this.props.created}</span></p>
          </div>
        </div>
        <div className="card-body">
          <p><span>Status</span><span>{this.state.status}</span></p>
          <p><span>Species</span><span>{this.state.species}</span></p>
          <p><span>Gender</span><span>{this.state.gender}</span></p>
          <p><span>Origin</span><span>{this.state.origin}</span></p>
          <p><span>Last Location</span><span>{this.state.last}</span></p>
        </div>
      </div>
    );
  }
    
  componentDidMount() {
  }
  
  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {
  }
  
  componentDidUpdate() {
  }

  componentWillUnmount() {
  }
}