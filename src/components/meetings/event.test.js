import React from 'react';
import { mount } from 'enzyme';
import SingleEvent from './event';

const testUser = {
  userID: 15,
  name: null,
  bio: null,
  location: null,
  img: 'https://res.cloudinary.com/cleanup/image/upload/v1621121500/download_remvsp.png',
};

describe('SingleEvent', () => {
  it('should render correctly in "debug" mode', async () => {
    // const preventDefault = jest.fn()

    const match = { params: { id: 34 } };
    const component = mount(<SingleEvent match={match} currentUser={testUser} debug />);
    // expect(preventDefault).toHaveBeenCalledTimes(1)

    //

    // expect(component.containsMatchingElement(<div class="banner-subheader">The Test Event</div>)).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
