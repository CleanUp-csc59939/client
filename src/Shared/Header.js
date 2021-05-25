import React, { useState } from 'react';
import { PageHeader, Button, Row, Col, Space, Input } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import AuthService from '../services/auth.service';
import { InstantSearch, Hits, connectSearchBox } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import SearchHits from './SearchHits';
// import env from 'react-dotenv';
import './Header.css';

const ClickOutHandler = require('react-onclickout');

/**
 * Header Component
 * @component
 */
const Header = ({ currentUser /* pageTitle  */, setOverlay }) => {
  const [showModal, setShowModal] = useState(false);
  // logic to check if logged in goes here to switch between 2 different headers
  const logOut = () => {
    console.log('log out');
    AuthService.logout();
  };

  /**
   * when user clicks outside of modal, it sets overlay in App.js and modal to false
   * which then hids the modal and removes opacity background in App.js
   * @method
   * @param none
   * @return none
   */
  const onClickOut = () => {
    setOverlay(false);
    setShowModal(false);
  };

  /**
   * Sets overlay (in App.js) and showModal to true
   * @method
   * @param {event} input read-only from search bar input
   * @param {function} refine prop from connectSearchBox
   */
  const triggerModal = (event, refine) => {
    refine(event.currentTarget.value);
    setOverlay(true);
    setShowModal(true);
  };

  const searchClient = instantMeiliSearch('http://3.139.65.222/', 'NWFjZGNhMGZjMThjMDgzYjY4NTcyNGY1', {
    primaryKey: 'id',
  });

  /**
   * Component for showing button to create an event
   * @function
   * @return {Component} Returns the Create Event button
   *
   */
  const CreateEvent = () => {
    return (
      <a href='/myMeetUps/create' alt='' type='submit'>
        <div
          style={{
            height: 50,
            width: 200,
            backgroundColor: '#AEFFCF',
            borderRadius: 60,
            borderColor: '#AEFFCF',
          }}
        >
          <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Space size='small'>
              <h2 style={{ paddingTop: '5%' }}>Create Event</h2>
              <AiOutlinePlus size={20} style={{ paddingBottom: '2%' }} />
            </Space>
          </Row>
        </div>
      </a>
    );
  };
  if (currentUser) {
    return (
      <div className='site-page-header'>
        <img className='headerImg' src='/logo.png' alt='' />
        <Row className='web' style={{ padding: '2%' }}>
          <Col span={3} style={{ paddingTop: '10px' }}>
            <Button className='homeButton' type='link' href='/home'>
              <h2 style={{ fontWeight: 'bold', color: '#4F4F4F' }}>CleanUp</h2>
            </Button>
          </Col>
          <Col span={9}>
            <ClickOutHandler onClickOut={() => onClickOut()}>
              <InstantSearch indexName='events' searchClient={searchClient}>
                <CustomSearch triggerModal={triggerModal} />
                {showModal ? (
                  <div className='hits'>
                    <SearchHits hitComponent={Hits} />
                  </div>
                ) : null}
              </InstantSearch>
            </ClickOutHandler>
          </Col>
          <Col span={12}>
            <Row>
              <Space size='small'>
                <CreateEvent />
                <Col>
                  <Button type='link' href='/home'>
                    <h2>Home</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/myMeetups'>
                    <h2>My Meet Ups</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/profile'>
                    <h2>Profile</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/login' onClick={logOut}>
                    <h2>Logout</h2>
                  </Button>
                </Col>
              </Space>
            </Row>
          </Col>
        </Row>
        <Row sm={4} className='mobile'>
          <Col span={8} offset={8}>
            <h2>Clean Up</h2>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <PageHeader
      className='site-page-header'
      ghost={false}
      title={[
        <Button className='homeButton' href='/home' key='1'>
          <h2 className='headerTitle'>CleanUp</h2>
        </Button>,
      ]}
      subTitle={[<img className='headerImg' src='./logo.png' alt='' />, "Let's Clean Up Our Home"]}
      extra={[
        <Button className='homeButton' href='/login' key='3'>
          <h4 className='headerOther'>Login</h4>
        </Button>,
        <Button className='homeButton' href='/signup' key='2'>
          <h4 className='headerOther'>SignUp</h4>
        </Button>,
      ]}
    ></PageHeader>
  );
};
export default Header;

/**
 * Custom search bar component wrapped in a instant-search helper function
 * @component
 * @param {function} triggerModal parent function to trigger search hits to show
 * @return                        search bar componennt
 *
 */
const CustomSearch = connectSearchBox(({ refine, currentRefinement, triggerModal }) => {
  return (
    <Input.Group style={{ paddingTop: '2%' }}>
      <Input
        value={currentRefinement}
        placeholder='Search Events'
        onChange={(event) => triggerModal(event, refine)}
        style={{ width: 400, borderRadius: 10 }}
      />
    </Input.Group>
  );
});
