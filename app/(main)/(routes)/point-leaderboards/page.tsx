"use client";

import React, { useEffect, useState } from "react";

interface Participant {
  id: number;
  name: string;
  points: number;
}

const Leaderboard: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      const response = await fetch("/api/participants");
      const data = await response.json();
      setParticipants(data);
    };
    fetchParticipants();
  }, []);

  const topThree = participants.slice(0, 3);
  const others = participants.slice(3);

  return (
    <div className="bg-gray-100 flex min-h-screen w-full flex-col items-center justify-start p-6">
      <h1 className="mb-10 text-center text-4xl font-bold pt-20">
        Code Devils Point Leaderboard
      </h1>
      <p className="mb-10 max-w-4xl text-center text-lg">
        This is where you can see who has the most points from the Code Devils
        Events. Winners 1-6 get different prizes. Good Luck Everyone!
      </p>

      {/* Podium for Top 3 */}
      <div className="mb-10 flex w-full max-w-4xl items-end justify-center space-x-8 px-8">
        {topThree[1] && (
          <div className="flex h-40 w-1/4 flex-col items-center rounded-md bg-slate-400 p-4">
            <div className="text-3xl font-bold">2</div>
            <div className="text-xl">{topThree[1].name}</div>
            <div className="text-lg">{topThree[1].points} pts</div>
          </div>
        )}

        {topThree[0] && (
          <div className="flex h-56 w-1/3 flex-col items-center rounded-md bg-yellow-500 p-6">
            <div className="text-3xl font-bold">1</div>
            <div className="text-2xl">{topThree[0].name}</div>
            <div className="text-lg">{topThree[0].points} pts</div>
          </div>
        )}

        {topThree[2] && (
          <div className="flex h-30 w-1/4 flex-col items-center rounded-md bg-orange-900 p-4">
            <div className="text-3xl font-bold">3</div>
            <div className="text-xl">{topThree[2].name}</div>
            <div className="text-lg">{topThree[2].points} pts</div>
          </div>
        )}
      </div>

      {/* List for the Rest */}
      <div className="max-h-[60vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
        {others.map((participant, index) => (
          <div
            key={participant.id}
            className="border-gray-300 flex items-center justify-between border-b p-4"
          >
            <div className="text-lg">
              {index + 4}. {participant.name}
            </div>
            <div className="text-lg">{participant.points} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
