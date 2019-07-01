import './RepoList.scss';
import React from 'react';
import { array } from 'prop-types';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  if (!repos) {
    return <div>No repos found.</div>;
  }

  // Render `RepoCard` component for each repository
  const renderedList = repos.map((repo, i) => {
    return (
      <RepoCard
        key={repo.id}
        repo={repo}
        rank={i+1}
      />
    );
  });

  return <div className="card-grid">{renderedList}</div>;
};

RepoList.propTypes = {
  repos: array.isRequired
}

export default RepoList;
