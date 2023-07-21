import React from 'react';
import ReactDOM from 'react-dom/client';
import { Foo } from 'shared-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>Hello, world.</div>
    <Foo />
  </React.StrictMode>
);
