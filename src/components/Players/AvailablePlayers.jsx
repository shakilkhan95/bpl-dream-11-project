import React from 'react'
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({players}) => {
  return (
    <div>
      <PlayerCard players={players}></PlayerCard>
    </div>
  );
}

export default AvailablePlayers