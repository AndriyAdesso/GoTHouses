import React, { Component } from 'react';
import './ListAndDetails.scss';

import List from './List/List';
import Details from './Details/Details';

const housesUrl = "https://anapioficeandfire.com/api/houses";
// const charactersUrl = "https://anapioficeandfire.com/api/characters";

class ListAndDetails extends Component {

  constructor() {
    super();
    this.state = {
        maxAmount: 500,
        name: null,
        region: null,
        coatOfArms: null,
        words: null,
        titles: null,
        seats: null,
        currentLord: null,
        heir: null,
        overlord: null,
        founded: null,
        founder: null,
        diedOut: null,
        ancestralWeapons: null,
        cadetBranches: null,
        swornMembers: null,
        houseSelected: false
    };
    this.onItemClick = this.onItemClick.bind(this);
  }
  

  onItemClick = async (e) => {
    window.scrollTo(0, 0);
    e.persist();
    this.setState({houseSelected: true});
    this.setState({name: e.target.dataset.name});
    this.setState({region: e.target.dataset.region});
    this.setState({coatOfArms: e.target.dataset.coatofarms});
    this.setState({words: e.target.dataset.words});
    this.setState({titles: e.target.dataset.titles});
    this.setState({seats: e.target.dataset.seats});
    this.setState({founded: e.target.dataset.founded});
    this.setState({diedOut: e.target.dataset.diedout});
    this.setState({ancestralWeapons: e.target.dataset.ancestralweapons});

    if(e.target.dataset.currentlord){
      const currentLord = await fetch(e.target.dataset.currentlord).then(response => response.json());
      this.setState({currentLord: currentLord.name});
    }else{
      this.setState({currentLord: null});
    }
    if(e.target.dataset.heir){
      const heir = await fetch(e.target.dataset.heir).then(response => response.json());
      this.setState({heir: heir.name});
    }else{
      this.setState({heir: null});
    }

    if(e.target.dataset.overlord){
      const overlord = await fetch(e.target.dataset.overlord).then(response => response.json());
      this.setState({overlord: overlord.name});
    }else{
      this.setState({overlord: null});
    }

    if(e.target.dataset.founder){
      const founder = await fetch(e.target.dataset.founder).then(response => response.json());
      this.setState({founder: founder.name});
    }else{
      this.setState({founder: null});
    }

    if(e.target.dataset.cadetbranches){
      const cadetBranchArr = [];
      const cadetBranches = e.target.dataset.cadetbranches.split(",");
      for (let cadet = 0; cadet < cadetBranches.length; cadet++){
        const cadetBranch = await fetch(cadetBranches[cadet]).then(response => response.json());
        cadetBranchArr.push(cadetBranch.name);
      }
      this.setState({cadetBranches: cadetBranchArr.toString()});
    }else{
      this.setState({cadetBranches: null});
    }
    if(e.target.dataset.swornmembers){
      const swornMembersArr = [];
      const swornMembers = e.target.dataset.swornmembers.split(",");
      for (let cadet = 0; cadet < swornMembers.length; cadet++){
        const swornMember = await fetch(swornMembers[cadet]).then(response => response.json());
        swornMembersArr.push(swornMember.name);
      }
      this.setState({swornMembers: swornMembersArr.toString()});
    }else{
      this.setState({swornMembers: null});
    }
  }

  render() {
    return (
    <div className="row">
         <div className="col-1"/>
        <div className="col-3 list">
          <List url={housesUrl} selectHouse={this.onItemClick} maxAmount={this.state.maxAmount}/>
        </div>
       
        <div className="col-7 details">
        <Details name={this.state.name}
          region={this.state.region}
          coatOfArms={this.state.coatOfArms}
          words={this.state.words}
          titles={this.state.titles}
          seats={this.state.seats}
          currentLord={this.state.currentLord}
          heir={this.state.heir}
          overlord={this.state.overlord}
          founded={this.state.founded}
          diedOut={this.state.diedOut}
          ancestralWeapons={this.state.ancestralWeapons}
          cadetBranches={this.state.cadetBranches}
          swornMembers={this.state.swornMembers}
          houseSelected={this.state.houseSelected}
          />
        </div>
        <div className="col-1"/>
    </div>
    );
  }
}

export default ListAndDetails;
