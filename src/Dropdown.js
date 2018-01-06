import React, {Component} from 'react';

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = { team: '66'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({team: event.target.value});
  }

  handleSubmit(event) {
    // console.log(this.state.team);
    this.props.onTeamChange(this.state.team);
    event.preventDefault();
  }

  render() {

    const teams = this.props.teams.map((team) => {
      var temp = team._links.self.href.split('/');
      var id= temp[temp.length-1];
      return(
        <option value= {id} key={team.name}>{team.name}</option>
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