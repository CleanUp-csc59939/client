import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SignUp debug />);

    expect(component).toMatchSnapshot();
  });
});
