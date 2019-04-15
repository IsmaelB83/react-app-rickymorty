// Node imports
import React, { Component } from 'react';
import ta from 'time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSkull, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faMale, faFemale, faTransgender } from '@fortawesome/free-solid-svg-icons'
import { faRadiation, faMagic } from '@fortawesome/free-solid-svg-icons'
// CSS imports
import './Card.css';


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
  
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <a href={`/personaje/${this.props.id}`}><img src={this.state.image} alt="character"></img></a>
          <div className="card-title">
            <a href={`/personaje/${this.props.id}`}><h1>{this.props.name}</h1></a>
            <p><span>id: {this.props.id}</span> - <span>{ta.ago(this.props.created)}</span></p>
          </div>
        </div>
        <div className="card-body">
          <p><span>Status</span><span>{this.state.status} <FontAwesomeIcon className="fontIcon" icon={this.state.status==='Dead'?faSkull:this.state.status==='Alive'?faHeart:faQuestion} /></span></p>
          <p><span>Species</span><span>{this.state.species} <FontAwesomeIcon className="fontIcon" icon={this.state.species==='Human' || this.state.species==='Humanoid'?faMale:this.state.species==='Alien'?faRadiation:this.state.species==='Mytholog'?faMagic:faQuestion} /></span></p>
          <p><span>Gender</span><span>{this.state.gender} <FontAwesomeIcon className="fontIcon" icon={this.state.gender==='Male'?faMale:this.state.gender==='Female'?faFemale:this.state.gender==='Genderless'?faTransgender:faQuestion} /></span></p>
          <p><span>Origin</span><span>{this.state.origin}</span></p>
          <p><span>Last Location</span><span>{this.state.last}</span></p>
        </div>
      </div>
    );
  }
}