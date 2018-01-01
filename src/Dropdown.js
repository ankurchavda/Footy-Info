import React, {Component} from 'react';

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = { team: '86'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleChange(event) {
    this.setState({team: event.target.value});
  }

  handleSubmit(event) {
    this.props.onTeamChange(this.state.team);
    event.preventDefault();
  }

  render() {

    const teams = this.props.teams.map((team) => {
      return(
        <option value= {team.id} key={team.id}>{team.name}</option>
      )
    })
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label>
            Pick Your Team:
            <select className="form-control" value={this.state.team} onChange={this.handleChange}>
              {teams}
            </select>
          </label>
          </div>
          <input className="btn btn-success" type="submit" value="Submit" />
        </form>
        {/* <div>
          <PlayerTable value={this.state.team}></PlayerTable>
        </div> */}
      </div>
    );
  }
}

export default Dropdown;