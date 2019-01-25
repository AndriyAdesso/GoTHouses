import React, { Component } from 'react';
import './Details.scss';


class Details extends Component {

  render() {

    if (this.props.houseSelected){

    return (
    <div className="details">
        <h4>{this.props.name}</h4>
        <span className="category">Region: </span>{this.props.region !== (""||null||"undefined") ? this.props.region : ""}<br/>
        <span className="category">Coat of Arms:  </span>{this.props.coatOfArms !== (""||null||"undefined") ? this.props.coatOfArms : ""}<br/>
        <span className="category">Words:  </span>{this.props.words !== (""||null||"undefined") ? this.props.words : ""}<br/>
        <span className="category">Titles:  </span>{this.props.titles !== (""||null||"undefined") ? this.props.titles : ""}<br/>
        <span className="category">Seats:  </span>{this.props.seats !== (""||null||"undefined") ? this.props.seats : ""}<br/>
        <span className="category">Current Lord:  </span>{this.props.currentLord !== (""||null||"undefined") ? this.props.currentLord : ""}<br/>
        <span className="category">Heir:  </span>{this.props.heir !== (""||null||"undefined") ? this.props.heir : ""}<br/>
        <span className="category">Overlord:  </span>{this.props.overlord !== (""||null||"undefined") ? this.props.overlord : ""}<br/>
        <span className="category">Founded:  </span>{this.props.founded !== (""||null||"undefined") ? this.props.founded : ""}<br/>
        <span className="category">Died Out:  </span>{this.props.diedOut !== (""||null||"undefined") ? this.props.diedOut : ""}<br/>
        <span className="category">Ancestral Weapons:  </span>{this.props.ancestralWeapons !== (""||null||"undefined") ? this.props.ancestralWeapons : ""}<br/>
        <span className="category">Cadet Branches:  </span>{this.props.cadetBranches !== (""||null||"undefined") ? this.props.cadetBranches : ""}<br/>
        <span className="category">Sworn Members:  </span>{this.props.swornMembers !== (""||null||"undefined") ? this.props.swornMembers : ""}<br/>
    </div>
    );}else {
        return null;
    }
  }
}

export default Details;
