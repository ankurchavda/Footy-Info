import React, {Component} from 'react';
import PlayerTable from './PlayerTable';
import Dropdown from './Dropdown';
import PlayerDetails from './PlayerDetails';
import './App.css';

const options = {
  headers: {
    "X-Auth-Token": "de2ab160e3c7470d97441638cc981463"
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      players: [],
      teams: [{id:'66', name:"Manchester United"},{id:'81', name:"FC Barcelona"}, {id:'86', name:'Real Madrid'}] ,
      selectedPlayer: null
    };

    this.GetTeamPlayers('86');
  }
  
  GetTeamPlayers(team) {
    fetch('http://api.football-data.org/v1/teams/'+team+'/players',options)
    .then( response => {
      return response.json();
    })
    .then( data => {
      this.setState({ 
        players : data.players,
        selectedPlayer: data.players[0]
      });
    })
    .catch( error =>{
      console.log('Your get team players operation responded with this: ', error.message);
    })
  }

  GetTeams() {
    fetch('http://api.football-data.org/v1/competitions/398/teams', options)
    .then( response => {
      return response.json();
    })
    .then( data => {
      this.setState({ teams: data.teams})
    })
    .catch( error => {
      console.log('Your get teams operation responded with this: ', error.message);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="dropdown">
            <Dropdown teams= {this.state.teams} onTeamChange = {team => this.GetTeamPlayers(team)}/>          
          </div>
        </div>
        <div className= "row details">
          <div className="col-md-9">
            <PlayerTable players = {this.state.players} onPlayerSelect={player => this.setState({selectedPlayer: player})}/>
          </div>
          <div className="col-md-3">
            <PlayerDetails selectedPlayer={this.state.selectedPlayer}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
