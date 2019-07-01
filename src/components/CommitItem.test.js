import React from "react";
import CommitItem from "./CommitItem";
import { commitsFixture } from '../fixtures/commits.js';
import { mount, shallow } from 'enzyme'
import moment from 'moment';

const commitRecord = commitsFixture[0];

it('renders without crashing', () => {
  shallow(<CommitItem />);
});

describe('commit contents', () => {
  let CommitItemComponent;

  beforeEach(() => {
    CommitItemComponent = mount(<CommitItem record={commitRecord}/>);
  });

  it('renders author name', () => {
    expect (CommitItemComponent.find('.commit-item__author-name').text())
      .toEqual(commitRecord.commit.author.name);
  });

  it('renders commit date', () => {
    expect (CommitItemComponent.find('.commit-item__date').text())
      .toEqual(moment(commitRecord.commit.committer.date).fromNow());
  });

  it('renders commit message', () => {
    expect (CommitItemComponent.find('.commit-item__msg-col').text())
      .toEqual(commitRecord.commit.message);
  });
});
