import React, { Fragment } from 'react';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => (
  <Fragment>
    <Header />
    <div className="w-full max-w-screen-xl mx-auto px-6">
      <div className="lg:flex mx-6">
        <Sidebar />
        <Content />
      </div>
    </div>
  </Fragment>
);

export default App;
