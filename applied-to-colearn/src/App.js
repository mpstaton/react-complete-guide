import React from 'react';

import Layout from './components/Layout/Layout';
import MainMessages from './containers/Messages/MainMessages.js'

function App() {
  return (
    <div className="App">
      <Layout>
        <MainMessages/>
      </Layout>
    </div>
  );
}

export default App;
