import React, { Component, Fragment } from "react";
import axios from "axios";

import JoinProjectForm from "./JoinProjectForm";
import UserProjectsList from "./UserProjectsList";

class Content extends Component {
  state = { roles: null, projects: null, newUserProject: null }

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

  setNewUserProject = project => (
    this.setState({ newUserProject: project })
  )

  render() {
    const { currentUser } = this.props;
    const { roles, projects, newUserProject } = this.state;

    return (
      <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
        <div>
          <div className="flex">
            <div className="pt-24 pb-8 lg:pt-28 w-full">
              <div className="markdown mb-6 px-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
                {currentUser ? (
                  <Fragment>
                    <JoinProjectForm
                      currentUser={currentUser}
                      onNewProject={this.setNewUserProject}
                      projects={projects}
                      roles={roles} />
                    <UserProjectsList
                      currentUserId={currentUser.id}
                      newUserProject={newUserProject}
                      projects={projects}
                      roles={roles}
                    />
                  </Fragment>
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
