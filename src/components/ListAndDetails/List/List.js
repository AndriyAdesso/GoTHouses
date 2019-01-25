import React, { Component } from 'react';
import './List.scss';

class List extends Component {

    constructor(){
        super();
        this.state = {
            gotHouses: []
        }
    }

    getId(url){
        return url.split("/").pop();
    }

    async componentDidMount(){
        let maxAmount = this.props.maxAmount;
        for (let page = 1; page < maxAmount/50; page++){
            var tempArr = await fetch( this.props.url+'?page='+page+'&pageSize=50').then(response => response.json());
            this.setState({gotHouses: this.state.gotHouses.concat(tempArr)});
        }
    }

    render() {
    return (
    <div>
        <h2>Game of Thrones Houses</h2>
        <ul>{this.state.gotHouses.map(gotHouse =>
            <li data-id={this.getId(gotHouse.url)}
                data-name={gotHouse.name}
                data-region={gotHouse.region}
                data-coatofarms={gotHouse.coatOfArms}
                data-words={gotHouse.words}
                data-titles={gotHouse.titles}
                data-seats={gotHouse.seats}
                data-currentlord={gotHouse.currentLord}
                data-heir={gotHouse.heir}
                data-overlord={gotHouse.overlord}
                data-founded={gotHouse.founded}
                data-founder={gotHouse.founder}
                data-diedout={gotHouse.diedOut}
                data-ancestralweapons={gotHouse.ancestralWeapons}
                data-cadetbranches={gotHouse.cadetBranches}
                data-swornmembers={gotHouse.swornMembers}
                onClick={this.props.selectHouse} key={this.getId(gotHouse.url)}>{gotHouse.name} </li>
            )}
        </ul>
    </div>
    );
  }
}

export default List;
