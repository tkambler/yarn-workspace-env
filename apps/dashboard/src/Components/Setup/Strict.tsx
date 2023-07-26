import React from 'react';
import { StrictMode } from 'react';

export const withStrict = (Component: React.FunctionComponent) => {
  return (props): JSX.Element => (
    <StrictMode>
      <Component {...props} />
    </StrictMode>
  );
};
