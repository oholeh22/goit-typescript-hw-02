import React from 'react';

const ErrorMessage: React.FC = () => {
  return (
    <div style={{ color: 'red', fontSize: '18px', textAlign: 'center' }}>
      <p>Oops! Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;

