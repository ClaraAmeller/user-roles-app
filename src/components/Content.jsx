import React, { Component } from "react";
import axios from "axios";

import JoinProjectForm from "./JoinProjectForm";

class Content extends Component {
  state = { roles: null, projects: null }

  componentDidMount() {
    axios.all([
      axios.get("http://localhost:3000/roles"),
      axios.get("http://localhost:3000/projects")
    ])
      .then(axios.spread((roles, projects) =>
        this.setState({
          roles: roles.data,
          projects: projects.data
        })
      ))
  };

  render() {
    const { currentUser } = this.props;
    const { roles, projects } = this.state;

    return (
      <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
        <div>
          <div className="flex">
            <div className="pt-24 pb-8 lg:pt-28 w-full">
              <div className="markdown mb-6 px-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
                {currentUser ? (
                  <JoinProjectForm currentUser={currentUser} projects={projects} roles={roles} />
                ) : (
                    <h1>Select a user</h1>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Content;
