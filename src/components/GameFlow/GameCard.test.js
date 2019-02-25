import React from 'react';
import GameCard from './GameCard';
import { shallow } from 'enzyme';

describe('GameCard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameCard />));

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <p>", () => {
    expect(wrapper.find("p").length).toEqual(1);
  });
});
