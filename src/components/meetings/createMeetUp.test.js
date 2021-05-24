import React from 'react';
import { shallow } from 'enzyme';
import CreateMeetUp from './createMeetUp';

describe('Create Event', () => {
  it('should render correctly in "debug" mode', async () => {
    const component = shallow(<CreateMeetUp debug />);
    expect(component).toMatchSnapshot();
  });
});
