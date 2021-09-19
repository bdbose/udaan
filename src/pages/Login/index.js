import React, { useRef } from 'react';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div>
      <h1>Login</h1>
      <input ref={emailRef} />
      <input ref={passwordRef} />
    </div>
  );
};

export default Login;
