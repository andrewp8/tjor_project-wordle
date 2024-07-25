import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './reset.css';
import './styles.css';


const root = createRoot(document.querySelector('#root'));
root.render(<App />);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
if (module.hot) {
  module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      root.render(NextApp);
  });
}