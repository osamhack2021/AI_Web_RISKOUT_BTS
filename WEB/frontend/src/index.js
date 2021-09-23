import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ThreatReportPage from './pages/ThreatReportPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App/> should be used as main page, but for now we direct users straight to threatreportpage */}
      {/* <App /> */}
      <ThreatReportPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
