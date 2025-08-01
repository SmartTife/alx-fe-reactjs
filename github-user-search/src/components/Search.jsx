// src/components/Search.jsx
import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const results = await searchUsers(username.trim(), location.trim(), minRepos.trim());
      setUsers(results.items);
    } catch (err) {
      setError('Something went wrong while searching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold">Advanced GitHub User Search</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* ✅ Optional Tailwind test */}
      <h1 className="text-3xl font-bold text-green-600 mt-6">
        Tailwind CSS is working!
      </h1>

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm bg-gray-50">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a href={user.html_url} className="text-blue-600" target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
