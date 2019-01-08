import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { addRole, closeAlert } from "../actions/index";
import { fetchRoles, fetchProjects } from "../actions/index";


class JoinProjectForm extends Component {
  state = { selectedProject: 1, selectedRole: 1 };

  componentDidMount() {
    this.props.dispatch(fetchRoles());
    this.props.dispatch(fetchProjects());
  };

  handleChange = (field, event) => (
    this.setState({ [ field ]: event.target.value })
  );

  saveProjectRole = () => {
    const projectUser = {
      project_id: Number(this.state.selectedProject),
      role_id: Number(this.state.selectedRole),
      user_id: this.props.currentUser.id
    };

    this.props.dispatch(addRole(projectUser));
  }

  render() {
    const { currentUser, projects, roles, loading, displayAlert, alertType } = this.props;
    const { selectedProject, selectedRole } = this.state;

    const Alert = ({ type }) => {
      const message = type === "error" ? "You're already in this project" : "Joined successfully!";
      const colour = type === "error" ? "red" : "green";
      return (
        <div className={`bg-${colour}-lightest border border-${colour}-light text-${colour}-dark mb-6 px-4 py-3 rounded`}>
          <strong className="font-bold">{message}</strong>
          <span
            onClick={() => this.props.dispatch(closeAlert())}
            className="absolute cursor-pointer pin-t pin-b pin-r px-4 py-3"
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
      )
    }

    return (
      <Fragment>
        <h1 className="text-2xl">{currentUser.name}</h1>
        <div className="w-full max-w-md mt-6">
          {displayAlert && <Alert type={alertType} />}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="uppercase text-grey-darker text-xs font-bold mb-2">
                Project
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={e => this.handleChange("selectedProject", e)}
                  className="appearance-none cursor-pointer w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                >
                  {projects.map(project => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
                <div className="absolute pin-y pin-r flex items-center pr-4 text-grey-darker">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="uppercase text-grey-darker text-xs font-bold mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  value={selectedRole}
                  onChange={e => this.handleChange("selectedRole", e)}
                  className="appearance-none cursor-pointer w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                >
                  {roles.map(role => (
                    <option key={role.id} value={Number(role.id)}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <div className="absolute pin-y pin-r flex items-center pr-4 text-grey-darker">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:mt-6 mx-3">
              <button
                onClick={loading ? null : this.saveProjectRole}
                className={classnames("shadow leading-tight bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                  { "opacity-50 cursor-not-allowed": loading })}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.userProjectsList.loading,
  currentUser: state.usersList.currentUser,
  displayAlert: state.userProjectsList.displayAlert,
  alertType: state.userProjectsList.alertType,
  roles: state.rolesList.roles,
  projects: state.projectsList.projects
});

export default connect(mapStateToProps)(JoinProjectForm);