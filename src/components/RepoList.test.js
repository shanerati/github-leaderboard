import React from "react";
import RepoList from "./RepoList";
import { reposFixture } from '../fixtures/repos.js';
import { mount, shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<RepoList repos={ reposFixture }/>);
});

it('renders correct number of cards', () => {
  const RepoListComponent = mount(<RepoList  repos={ reposFixture }/>);
  expect (RepoListComponent.find('.repo-card')).toHaveLength( reposFixture.length );
});
