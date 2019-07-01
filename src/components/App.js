import './App.scss';
import React from 'react';
import { ghGetTopStarredRepos } from '../apis/github';
import RepoList from './RepoList';

class App extends React.Component {
  state = {
    repos: [] // Repositories to be displayed
  };

  componentDidMount() {
    ghGetTopStarredRepos().then((response) => {
      this.setState({
        repos: response.data.items
      });
    }).catch((e) => {
      // TODO: Improve error handling
      console.log(e);
    });
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          GitHub Leaderboard
        </div>
        <RepoList
          repos={this.state.repos}
        />
      </div>
    );
  }
}

export default App;
