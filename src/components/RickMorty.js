// Node imports
import React, { Component } from 'react';
// Own imports
import Formulario from './Formulario';
import Paginador from './Paginador';
import Card from './Card';
// CSS imports
import './RickMorty.css';
// Assets imports
import logo from './spinner.gif';

export default class RickMorty extends Component {
    constructor(props) {
      super(props);
      this.pageCompTop = React.createRef();
      this.pageCompBottom = React.createRef();
      this.formComp = React.createRef();
      this.state = { 
        loading: true,
        characters: []
      }
      /*
        Redireccionar vía props.history:
          setTimeout(() => {
            this.props.history.push('/personaje/22');
          }, 5000); Redireccionar via props.history 
        Otra opción vía componente: 
          <Redirect to='/personaje/22'/>
      */
    }
    
    componentWillMount() {
    }
    
    render() {
      return (
          <div>
            <Formulario ref={this.formComp} onFilter={this.filterEventHandler.bind(this)}/>
            <Paginador ref={this.pageCompTop} page={this.state.page} pages={this.state.pages} onClick={this.paginatorEventHandler.bind(this)}/>
              <div className="card-container">
              { this.state.loading && 
                  <div className="card-container">
                    <div>
                      <img src={logo} alt="loading..." />
                      <h2>Loading data...</h2>
                    </div>
                  </div>
              }
              { !this.state.loading && this.state.characters.length > 0 && this.state.characters.map( (ch, i) => 
                  <Card key={ch.id} id={ch.id} name={ch.name} status={ch.status} created={ch.created} 
                                    image={ch.image} species={ch.species} gender={ch.gender} origin={ch.origin.name}
                                    last={ch.location.name}/>)
              }
              { !this.state.loading && this.state.characters.length === 0 && 
                  <h1>No hay resultados para los filtros indicados</h1>
              }
            </div>
            <Paginador ref={this.pageCompBottom} page={this.state.page} pages={this.state.pages} onClick={this.paginatorEventHandler.bind(this)}/>
          </div>
      );
    }
  
    componentDidMount() {
      console.log('did mount');
      this.retrieveCharacters('https://rickandmortyapi.com/api/character/');
    }  
   
    componentDidUpdate() {
    }

    async retrieveCharacters(path) {
      try {
          // Consume API
          let url = new URL(path), result;
          let response = await fetch(url);   
          if (response.status === 200) {
            result = await response.json();
          } else {
            console.log('404');
            result = {
              results: [],
              info: { next: '',
                      prev: '',
                      page: "1",
                      pages: "1",
              }
            }
          }
          // Update current state
          this.setState( 
            { characters: result.results,
              loading: false,
              next: result.info.next,
              prev: result.info.prev,
              page: url.searchParams.get("page") ? url.searchParams.get("page") : "1",
              pages: result.info.pages
            } 
          );
          // Update paginator
          let newPageStatus = { page: this.state.page, pages: this.state.pages }
          this.pageCompTop.current.changeStatus(newPageStatus);
          this.pageCompBottom.current.changeStatus(newPageStatus);
      } catch (error) {
          console.log(error);
      }
    }  

    async paginatorEventHandler(e) {
      try {
        let url;
        url = e.target.name==="next" ? this.state.next : this.state.prev;
        if (url !== '') {
          await this.retrieveCharacters(url);
        }
      } catch (error) {
        console.log(error);
      }
    }

    async filterEventHandler() {
      this.setState({loading: true});
      let url = 'https://rickandmortyapi.com/api/character/?';
      let filters = this.formComp.current.state;
      if (filters.name !== '') url += `name=${filters.name}`;
      if (filters.status !== '') url += `&status=${filters.status}`;
      if (filters.species !== '') url += `&species=${filters.species}`;
      if (filters.gender !== '') url += `&gender=${filters.gender}`;
      await this.retrieveCharacters(url);
    }
  }