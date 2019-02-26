import React from 'react';
import GameBox from './GameBox';
import GameUI from '../components/GameFlow/GameUI';
import GameGrid from '../components/GameFlow/GameGrid';
import GameCard from '../components/GameFlow/GameCard';
import { shallow } from 'enzyme';

describe('GameBox', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameBox />));

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <h2>", () => {
    expect(wrapper.find("h2").length).toEqual(1);
  });
});
