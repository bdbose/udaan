import React, { useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';
import './style.scss';
import { useHistory } from 'react-router';
const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const auth = getAuth();
  const onSubmitSignIn = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        history.push('/main');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const onSubmitSignUp = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        updateProfile(auth.currentUser, { displayName: data.name })
          .then((res) => {
            history.push('/main');
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='login-wrapper'>
      {!signIn ? (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmitSignUp)}>
            <input
              type='email'
              placeholder='Email'
              {...register('email')}
              required
            />
            <input
              type='text'
              placeholder='Name'
              {...register('name')}
              required
            />
            <input
              placeholder='Password'
              type='password'
              {...register('password')}
              required
            />
            <input placeholder='Re-enter password' type='password' required />
            <button>Submit</button>
          </form>
          <div>
            Already a user? <span onClick={() => setSignIn(true)}>SignIn</span>
          </div>
        </>
      ) : (
        <>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(onSubmitSignIn)}>
            <input
              type='email'
              placeholder='Email'
              {...register('email')}
              required
            />
            <input placeholder='Re-enter password' type='password' required />
            <button>Login</button>
          </form>
          <div>
            Don’t have an account?
            <span onClick={() => setSignIn(false)}>Create new one</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
