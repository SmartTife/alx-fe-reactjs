// src/services/githubService.js
import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  }
});

// Advanced GitHub search
export const searchUsers = async (query) => {
  const response = await github.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};

