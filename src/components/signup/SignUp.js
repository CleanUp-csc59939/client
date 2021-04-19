import React from 'react';

import { FormWeb } from './Form';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div className='web'>
        <FormWeb onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
      <div className='mobile'>login for mobile - working on it</div>
    </div>
  );
};

export default SignUp;
