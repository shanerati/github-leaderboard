import React from "react";
import CommitList from "./CommitList";
import { commitsFixture } from '../fixtures/commits.js';
import { mount, shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<CommitList  commits={ commitsFixture }/>);
});

it('renders correct number of commits', () => {
  const CommitListComponent = mount(<CommitList commits={ commitsFixture }/>);
  expect (CommitListComponent.find('.commit-item'))
    .toHaveLength( commitsFixture.length );
});
