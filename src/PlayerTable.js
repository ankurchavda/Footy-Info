import React from 'react';
import Crest from './crest';
import PlayerRow from './PlayerRow';

function PlayerTable (props) {
  if(!props.players){
    return <div>Loading...</div>
  }

  const headers = [<th key="Name">Name</th>]

  const players = props.players.map((player) => {
    return (
      <PlayerRow key={player.jerseyNumber} player={player} onPlayerSelect={props.onPlayerSelect}/>
    )
  });

  return (
    <div className="row">
      {/* <div className="col-md-2">
        <Crest />
      </div> */}
      <div className="col-md-10">
        <div className="table-responsive">
          <table className="table table-striped table-dark table-hover table-sm">
            <thead>
              <tr>
                {headers}          
              </tr>
            </thead>
            <tbody>
              {players}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}

export default PlayerTable;