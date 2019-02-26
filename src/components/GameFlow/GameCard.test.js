import React from 'react';
import GameCard from './GameCard';
import { shallow } from 'enzyme';

describe('GameCard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameCard />));

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a <img>", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
});
