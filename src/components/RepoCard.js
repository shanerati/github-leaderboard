import './RepoCard.scss';
import React from 'react';
import { number, object } from 'prop-types';
import CommitList from './CommitList';
import { ghGetCommits } from '../apis/github';

class RepoCard extends React.Component {
  state = { commits: null };

  getCommits() {
    return ghGetCommits(this.props.repo).then((response) => {
      this.setState({
        commits: response.data
      });
    }).catch((e) => {
      // TODO: Improve error handling
      console.log(e);
    });
  }

  componentDidMount() {
    if (this.props.repo) {
      this.getCommits();
    }
  }

  render() {
    if (!this.props.repo) {
      return <div>Loading...</div>;
    }

    return (
      <div className="repo-card">
          <a className="repo-card__header center" href={this.props.repo.html_url} target="_blank" rel="noopener noreferrer">
            <div className="repo-card__rank">#{this.props.rank}</div>
            <div className="repo-card__title center overflow-hidden">
              <img className="repo-card__avatar" src={this.props.repo.owner.avatar_url} alt="repo owner"/>
              <span className="repo-card__name ellipses nowrap" title={this.props.repo.name}>
                {this.props.repo.name}
              </span>
            </div>
            <div className="repo-card__star-count">&#9733; {this.props.repo.stargazers_count}</div>
          </a>
          <CommitList
            commits={this.state.commits}
          />
      </div>
    );
  }
}

RepoCard.propTypes = {
  rank: number.isRequired,
  repo: object.isRequired
}

export default RepoCard;
