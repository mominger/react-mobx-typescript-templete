import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('App', () => {
  let wrapper = null;

  it('should render success', async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toContain('div');
  });

  afterEach(() => {
    wrapper = null;
  });
});
