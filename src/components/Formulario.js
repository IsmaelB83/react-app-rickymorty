// Node imports
import React, { Component } from 'react';
// CSS imports
import './Formulario.css';


export default class Formulario extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      species: '',
      gender: ''
    };
  }

  render() {
    return (
      <div className="form-cards">
        <p>Criterios de filtrado</p>
        <input name="name" placeholder="filter by name..." onChange={this.formEventListener.bind(this)}/>
        <select name="status" defaultValue="" onChange={this.formEventListener.bind(this)}>
          <option value="" disabled hidden>filter by status...</option>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
        <input name="species" placeholder="filter by species..." onChange={this.formEventListener.bind(this)}/>
        <select name="gender" defaultValue="" onChange={this.formEventListener.bind(this)}>
          <option value="" disabled hidden>filter by gender...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    );
  }

  async formEventListener(e) {
    let key = e.target.name;
    let value = e.target.value;
    await this.setState({ [key]: value });    
    this.props.onFilter();
  }
}