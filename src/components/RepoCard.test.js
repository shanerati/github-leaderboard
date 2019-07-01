import React from "react";
import RepoCard from "./RepoCard";
import { commitsFixture } from '../fixtures/commits.js';
import { reposFixture } from '../fixtures/repos.js';
import { mount, shallow } from 'enzyme'

const github = require('../apis/github.js');

const repo = reposFixture[0];
const repoRank = 3;

it('renders without crashing', () => {
  shallow(<RepoCard repo={ repo } rank={ repoRank }/>);
});

describe('repo card contents', () => {
  let RepoCardComponent;

  beforeEach(() => {
    RepoCardComponent = mount(<RepoCard repo={ repo } rank={ repoRank }/>);
    RepoCardComponent.instance().getCommits = jest.fn().mockResolvedValue(commitsFixture);;
    RepoCardComponent.update();
  });

  it('renders correct repo link', () => {
    expect(RepoCardComponent
      .find('a.repo-card__header')
      .filterWhere(
        (x) => { return x.prop('href') === repo.html_url }
      )
    ).toHaveLength(1);
  });

  it('renders correct repo rank', () => {
    expect (RepoCardComponent.find('.repo-card__rank').text()).toEqual('#' + repoRank);
  });

  it('renders correct repo avatar', () => {
    expect(RepoCardComponent
      .find('img.repo-card__avatar')
      .filterWhere(
        (x) => { return x.prop('src') === repo.owner.avatar_url }
      )
    ).toHaveLength(1);
  });

  it('renders correct repo name', () => {
    expect(RepoCardComponent.find('.repo-card__name').text()).toEqual(repo.name);
  });

  it('renders correct star count', () => {
    expect(RepoCardComponent.find('.repo-card__star-count').text()).toContain(repo.stargazers_count);
  });
});
