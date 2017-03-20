import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import json from './sites.json';
import Site from './components/site.jsx';
import Database from './backend/db.jsx';

class App extends React.Component {
  render() {
    const data = json.sites.map(site => {
      return <Site key={site.name} site={site} />;
    });
    return (
    <div>
      <div className='logo-container'>
        <img className='logo' src='/img/logo.svg'></img>
        <img className='logoTM' src='/img/toastmasters-logo.png'></img>
      </div>
      <div className="row">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Toastee</th>
              <th>Word-Count</th>
              <th>Use of Word of the Day</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
