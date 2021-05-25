import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 *
 * return a Protected Route
 * @component
 * @param {Component} component the component to be rendered
 * @param {user} User the current user
 * @param {...rest} .inputs any extra parameters provided by user in to component render
 * @return  {Component}            render component if user credentials are valid, otherwise return an unauthorizes page
 */

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('Im in protected');
        if (user) {
          console.log('Im in authorized');
          return <Component currentUser={user} {...rest} {...props} />;
        }
        console.log('Im in unauthorized');
        return (
          <Redirect
            to={{
              pathname: '/unauthorized',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
