import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
      //This calls a layout component that brings in necessary styles
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
