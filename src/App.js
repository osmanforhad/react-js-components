import React, { Component } from 'react';
import TopNav from './components/common/TopNav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNav />
        <h1 className="text-center mt-2">Main Component</h1>
    </div>
    );
  }
}

export default App;