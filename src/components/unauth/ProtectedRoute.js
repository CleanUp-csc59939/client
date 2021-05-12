import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
