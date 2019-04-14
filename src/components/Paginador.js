// Node imports
import React, { Component } from 'react';
// CSS imports
import './Paginador.css';

export default class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      pages: this.props.pages,
    }
  }
  
  render() {
      return (
            <div className="card-container-footer">
              <button name="prev" onClick={this.props.onClick}>Anterior</button>
              <h3>Pagina {this.state.page} de {this.state.pages}</h3>
              <button name="next" onClick={this.props.onClick}>Siguiente</button>
            </div>
      );
  }

  changeStatus(status) {
    this.setState(status);
  }
}