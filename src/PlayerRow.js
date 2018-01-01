import React from 'react';

const PlayerRow = ({player, onPlayerSelect}) => {
    return(
        <tr onClick={() => onPlayerSelect(player)}>
          <td>{player.name}</td>
        </tr>
    )
}

export default PlayerRow;