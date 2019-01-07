import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

class App extends Component {
  state = { currentUser: null }

  setCurrentUser = (user) => this.setState({
    currentUser: user
  })

  render() {
    const { currentUser } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="lg:flex mx-6">
            <Sidebar onUserSelect={this.setCurrentUser} />
            <Content currentUser={currentUser} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;