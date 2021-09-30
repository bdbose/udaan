import React from 'react';

const Main = () => {
  return (
    <div
      style={{
        marginTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1>Welcome to Udaan</h1>
      <label>Upload your file to translate:</label>
      <input type='file' />
      <button>Upload</button>
    </div>
  );
};
export default Main;
