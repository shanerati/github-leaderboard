// GitHub API service for fetching repository, commit data

import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  // Authorizing with GitHub API provides much higher usage rate limits
  auth: {
    username: process.env.REACT_APP_GITHUB_USER,
    password: process.env.REACT_APP_GITHUB_TOKEN
  }
});

// Get the `repoCount` highest-starred repositories
export function ghGetTopStarredRepos(repoCount = 100) {
  // TODO: Investigate why top 100 repos list doesn't seem to be
  // consistent across requests
  return github.get('/search/repositories', {
    params: {
      q: 'stars:>0',
      sort: 'stars',
      per_page: repoCount
    }
  });
}

// Get all commits to repository `repo` for the last 24 hours
export function ghGetCommits(repo) {
  return github.get(`/repos/${repo.owner.login}/${repo.name}/commits`, {
    params: {
      since: new Date(Date.now() - 86400 * 1000).toISOString()
    }
  });
}
