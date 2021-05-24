import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const testUser = {
  userID: 15,
  name: null,
  bio: null,
  location: null,
  img: 'https://res.cloudinary.com/cleanup/image/upload/v1621121500/download_remvsp.png',
};

describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header currentUser={testUser} debug />);

    expect(component).toMatchSnapshot();
  });
});
