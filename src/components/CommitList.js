import './CommitList.scss';
import React from 'react';
import CommitItem from './CommitItem';
import { array } from 'prop-types';

const CommitList = ({ commits }) => {
    if (!commits) {
      return <div className="commit-list">Loading...</div>;
    } else if (!commits.length) {
      return <div className="commit-list">No commits in the past day.</div>;
    }

    // Render `CommitItem` component for each commit
    const renderedList = commits.map(commitRecord => {
      return (
        <CommitItem
          key={commitRecord.sha}
          record={commitRecord}
        />
      );
    });

    return <div className="commit-list">{renderedList}</div>;
  };

CommitList.propTypes = {
  commits: array
}

export default CommitList;
