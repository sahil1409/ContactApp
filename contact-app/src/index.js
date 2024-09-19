import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // React's Strict Mode, in development, intentionally invokes lifecycle methods like useEffect twice to help detect side effects, which can cause behaviors such as making an API call twice if not handled properly; for example, in React 18, if you fetch data inside useEffect, Strict Mode may trigger the fetch twice by simulating an unmount and remount of the component.

  // Example:

  // useEffect(() => {
  //   fetchContacts(); // This may be called twice in Strict Mode, simulating potential side effects
  // }, []);
);
