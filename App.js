import React from 'react';
import LoginPage from './LoginPage';
import GenerateImage from './GenerateImage';
import GenerateVideo from './GenerateVideo';

export default function App() {
  return (
    <div>
      <h1>AI Creator</h1>
      <LoginPage />
      <GenerateImage />
      <GenerateVideo />
    </div>
  );
}