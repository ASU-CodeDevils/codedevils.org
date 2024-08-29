"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 rounded border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 rounded border p-2"
        />
        <button
          onClick={handleLogin}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-start">
      <div className="flex w-full max-w-2xl flex-col items-center p-4">
        <h1 className="mb-4 text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="mb-4 rounded bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>
        <AdminControls />
      </div>
    </div>
  );
};

const AdminControls: React.FC = () => {
  const [name, setName] = useState("");
  const [points, setPoints] = useState<number | string>("");
  const [participants, setParticipants] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const response = await fetch("/api/participants");
      if (!response.ok) throw new Error("Failed to fetch participants");
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching participants");
    }
  };

  const addParticipant = async () => {
    if (!name || !points) {
      alert("Please enter a name and points");
      return;
    }

    await fetch("/api/addParticipant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, points: parseInt(points as string) }),
    });

    setName("");
    setPoints("");
    fetchParticipants();
  };

  const updatePoints = async (id: number, newPoints: number) => {
    await fetch("/api/updateParticipant", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, points: newPoints }),
    });

    fetchParticipants();
  };

  const deleteParticipant = async (id: number) => {
    await fetch("/api/deleteParticipant", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchParticipants();
  };

  // Filter participants based on the search query
  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Manage Participants</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      />
      <button
        onClick={addParticipant}
        className="rounded bg-green-500 px-4 py-2 text-white"
      >
        Add Participant
      </button>
      <input
        type="text"
        placeholder="Search participants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-full rounded border p-2 mt-12"
      />

      <div className="mt-6 max-h-96 overflow-auto">
        {filteredParticipants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center justify-between border-b p-4"
          >
            <span>
              {participant.name} - {participant.points} pts
            </span>
            <div>
              <input
                type="number"
                value={participant.points}
                onChange={(e) =>
                  updatePoints(participant.id, parseInt(e.target.value))
                }
                className="mr-2 rounded border p-1"
              />
              <button
                onClick={() => deleteParticipant(participant.id)}
                className="rounded bg-red-500 px-2 py-1 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
