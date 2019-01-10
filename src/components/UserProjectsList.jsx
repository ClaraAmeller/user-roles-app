import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { fetchUserProjects } from "../actions/fetchUserProjects";
import { removeRole } from "../actions/removeRole";

class UserProjectsList extends Component {
  componentDidMount() {
    this.fetchData();
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.fetchData();
    }
  }

  fetchData = () => (
    this.props.dispatch(fetchUserProjects(this.props.currentUser.id))
  )

  findProject = projectId => (
    this.props.projects.find(project => project.id === projectId).name
  )

  findRole = roleId => (
    this.props.roles.find(role => role.id === roleId).name
  )

  leaveProject = projectId => this.props.dispatch(removeRole(projectId));

  render() {
    const { userProjects, projects, roles, loading } = this.props;

    return (
      <Fragment>
        <h2 className="mt-12 mb-6 text-lg">Your projects</h2>
        {!!userProjects && userProjects.map(userProject => (
          <div key={userProject.id} className="flex mb-4 px-4 h-16 shadow text-sm lg:text-base">
            <div className="flex-1 self-center">
              {!!projects && this.findProject(userProject.project_id)}
            </div>
            <div className="flex-1 self-center uppercase text-grey-darker text-sm font-bold">
              {!!roles && this.findRole(userProject.role_id)}
            </div>
            <div
              onClick={() => loading ? null : this.leaveProject(userProject.id)}
              className={classnames("px-2 cursor-pointer self-center uppercase text-grey-darker text-sm font-bold", { "opacity-50 cursor-not-allowed": loading })}
            >
              <i className="fas fa-ban"></i>
            </div>
          </div>
        ))}
      </Fragment>
    );
  };
};

const mapStateToProps = state => ({
  roles: state.rolesList.roles,
  projects: state.projectsList.projects,
  loading: state.userProjectsList.loading,
  currentUser: state.usersList.currentUser,
  userProjects: state.userProjectsList.userProjects
});

export default connect(mapStateToProps)(UserProjectsList);