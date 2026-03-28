import React, { use, useState } from 'react';
import PlayerCard from './PlayerCard';


const Players = ({playerDataPromise}) => {
    const playersData = use(playerDataPromise);
    const players = playersData.players;

    const [selectedType, setSelectedType] = useState('available');

  return (
    <section className="x-2.5 lg:mx-10 py-5 lg:py-10 mt-10">
      <div className="flex justify-between items-center mb-5">
        {selectedType === "available" ? (
          <h3 className="text-2xl font-semibold text-[#131313]">
            Available Player: {players.length}
          </h3>
        ) : (
          <h3 className="text-2xl font-semibold text-[#131313]">
            Selected Player: {players.length}
          </h3>
        )}
        <div className="space-x-5">
          <button
            onClick={() => setSelectedType("available")}
            className={`px-6 py-3 ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-base-300"} rounded-lg font-semibold cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`px-6 py-3 ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-base-300"} rounded-lg font-semibold cursor-pointer`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player}></PlayerCard>
        ))}
      </div>
    </section>
  );
}

export default Players