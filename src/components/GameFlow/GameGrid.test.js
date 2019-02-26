import React from 'react';
import GameGrid from './GameGrid';
import GameCard from './GameCard';
import { shallow } from 'enzyme';

describe('GameGrid', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameGrid />));

  it("should render three <div>s", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });
});
