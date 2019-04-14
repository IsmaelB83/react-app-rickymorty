import React, { Component } from 'react';
import './Styles.css';

export default class CharacterCard extends Component {
  
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
}