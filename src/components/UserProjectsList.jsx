import React, { Component, Fragment } from "react";
import axios from "axios";

class UserProjectsList extends Component {
  state = { userProjects: null };

  componentDidMount() {
    axios.get(`http://localhost:3000/project_users?user_id=${this.props.currentUserId}`)
      .then(res => this.setState({ userProjects: res.data }))
  };

  findProject = id => this.props.projects.find(project => project.id === id).name;

  findRole = id => this.props.roles.find(role => role.id === id).name;

  leaveProject = id => {
    const restProjects = this.state.userProjects.filter(userProject => userProject.id !== id);
    axios.delete(`http://localhost:3000/project_users/${id}`)
      .then(() => this.setState({ userProjects: restProjects }))
  };

  render() {
    const { userProjects } = this.state;

    return (
      <Fragment>
        <h2 className="mt-12 mb-6">Your projects</h2>
        {userProjects && userProjects.map(userProject => (
          <div key={userProject.id} className="flex mb-4 px-4 h-16 shadow">
            <div className="flex-1 self-center">
              {this.findProject(userProject.project_id)}
            </div>
            <div className="flex-1 self-center uppercase text-grey-darker text-sm font-bold">
              {this.findRole(userProject.role_id)}
            </div>
            <div
              onClick={() => this.leaveProject(userProject.id)}
              className="px-2 cursor-pointer self-center uppercase text-grey-darker text-sm font-bold"
            >
              <i className="fas fa-ban"></i>
            </div>
          </div>
        ))}
      </Fragment>
    );
  };
};

export default UserProjectsList;