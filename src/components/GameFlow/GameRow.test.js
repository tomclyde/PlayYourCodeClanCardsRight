import React from 'react';
import GameRow from './GameRow';
import GameCard from './GameCard';
import { shallow } from 'enzyme';

describe('GameRow', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<GameRow />));

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
