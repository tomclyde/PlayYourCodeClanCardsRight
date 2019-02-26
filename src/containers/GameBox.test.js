import React from 'react';
import GameBox from './GameBox';
import GameUI from '../components/GameFlow/GameUI';
import GameGrid from '../components/GameFlow/GameGrid';
import GameCard from '../components/GameFlow/GameCard';
import { shallow } from 'enzyme';

describe('GameBox', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameBox />));

  it("should render two <div>s", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <h1>", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
