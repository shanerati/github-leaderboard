import './CommitItem.scss';
import React from 'react';
import moment from 'moment';

const CommitItem = ({ record }) => {
    if (!record) {
      return <div>Commit not found.</div>;
    }

    return (
      <div className="commit-item">
        <div className="commit-item__author-col">
          <div className="commit-item__author-name">
            {record.commit.author.name}
          </div>
          <div className="commit-item__date">
            {moment(record.commit.committer.date).fromNow()}
          </div>
        </div>
        <div className="commit-item__msg-col ellipses">
          {record.commit.message}
        </div>
      </div>
    );
  };

export default CommitItem;
