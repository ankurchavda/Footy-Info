import React from 'react';

function PlayerDetails({selectedPlayer}){

    if(!selectedPlayer)
    {
      return (
        <div>Loading....</div>
      )
    } 
    return(
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{selectedPlayer.name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Position: {selectedPlayer.position}</li>
            <li className="list-group-item">Nationality: {selectedPlayer.nationality}</li>
            <li className="list-group-item">Jersey Number: {selectedPlayer.jerseyNumber}</li>
          </ul>
        </div>
    )
}

export default PlayerDetails;