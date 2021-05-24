import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('Login', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });
});
