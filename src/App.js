import React from 'react';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col s12">
        <Table />
        </div>
      </div>
    </div>

  );
};

export default App;