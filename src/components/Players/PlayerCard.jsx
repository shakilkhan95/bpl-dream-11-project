import React from 'react'

const PlayerCard = ({players}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        players.map(player => {
          return <div className="bg-base-300 rounded-lg shadow-lg p-6 space-y-2.5">
            <div className="rounded-lg">
              <img
                className="w-full rounded-lg max-h-60"
                src={player.image}
                alt="Players Image"
              />
            </div>
            <h4 className="text-[#131313] text-4xl font-semibold">{player.name}</h4>

            <div className="flex justify-between items-center">
              <p className="text-[#13131370] font-semibold">{player.country}</p>
              <span className="px-6 py-3 bg-white rounded-lg text-[#13131370] font-semibold">
                {player.type}
              </span>
            </div>

            <p className="text-lg font-medium">Rating: {player.rating}</p>

            <div className="flex justify-between items-center text-[#13131380] text-lg">
              <p>{player.battingStyle}</p>
              <p>{player.bowlingStyle}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Price: ${player.price}</p>
              <button className="btn btn-primary">Choose Player</button>
            </div>
          </div>;
        })
      }
    </div>
  );
}

export default PlayerCard