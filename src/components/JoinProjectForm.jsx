import React, { Component, Fragment } from "react";
import axios from "axios";

class JoinProjectForm extends Component {
  state = {
    selectedProject: 1,
    selectedRole: 1,
    displayAlert: false,
    alertType: null
  };

  handleChange = (field, event) => this.setState({ [ field ]: event.target.value });

  saveProjectRole = () => {
    const projectUser = {
      project_id: Number(this.state.selectedProject),
      role_id: Number(this.state.selectedRole),
      user_id: this.props.currentUser.id
    };

    this.checkAlreadyInProject(projectUser).then(res => {
      if (res.data.length > 0)
        return this.setState({
          displayAlert: true,
          alertType: <this.ErrorAlert />
        });
      axios
        .post("http://localhost:3000/project_users", projectUser)
        .then(res =>
          this.setState({
            displayAlert: true,
            alertType: <this.SuccessAlert />
          }, () => this.props.onNewProject(res.data))
        )
        .catch(error => console.log("error", error));
    });
  };

  checkAlreadyInProject = (projectUser) => {
    // We just care about that user not being in that project
    // Keeping the role would lead to checking user && role && project 
    const { role_id, ...noRole } = projectUser;
    return axios.get("http://localhost:3000/project_users", {
      params: { ...noRole }
    })
  }

  ErrorAlert = () => (
    <div className="bg-red-lightest border border-red-light text-red-dark mb-6 px-4 py-3 rounded relative">
      <strong className="font-bold">You're already in this project</strong>
      <span
        onClick={() => this.setState({ displayAlert: false })}
        className="absolute cursor-pointer pin-t pin-b pin-r px-4 py-3"
      >
        <i className="fas fa-times"></i>
      </span>
    </div>
  );

  SuccessAlert = () => (
    <div className="bg-green-lightest border border-green-light text-green-dark mb-6 px-4 py-3 rounded relative">
      <strong className="font-bold">Joined successfully!</strong>
      <span
        onClick={() => this.setState({ displayAlert: false })}
        className="absolute cursor-pointer pin-t pin-b pin-r px-4 py-3"
      >
        <i className="fas fa-times"></i>
      </span>
    </div>
  );

  render() {
    const { currentUser, projects, roles } = this.props;
    const {
      selectedProject,
      selectedRole,
      displayAlert,
      alertType
    } = this.state;

    return (
      <Fragment>
        <h1>{currentUser.name}</h1>
        <div className="w-full max-w-md mt-6">
          {displayAlert && alertType}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="uppercase text-grey-darker text-xs font-bold mb-2">
                Project
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={e =>
                    this.handleChange("selectedProject", e)
                  }
                  className="appearance-none cursor-pointer w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                  {projects.map(project => (
                    <option
                      key={project.id}
                      value={project.id}>
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
                  onChange={e =>
                    this.handleChange("selectedRole", e)
                  }
                  className="appearance-none cursor-pointer w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
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
                onClick={this.saveProjectRole}
                className="shadow leading-tight bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};



export default JoinProjectForm;