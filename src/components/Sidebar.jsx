import React, { Component } from "react";
import axios from "axios";

class Sidebar extends Component {
	state = { users: null };

	componentDidMount() {
		axios.get("http://localhost:3000/users")
			.then(res => this.setState({ users: res.data }))
	}

	getUser = user => {
		window.history.pushState(null, null, user.name);
		axios.get(`http://localhost:3000/users/${user.id}`)
			.then(res => this.props.onUserSelect(res.data))
	}

	render() {
		const { users } = this.state;

		return (
			<div className="hidden absolute z-90 mt-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
			>
				<div className="lg:block lg:relative lg:sticky">
					<nav className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8">
						<div className="mb-8">
							<p className="mb-3 lg:mb-2 text-grey uppercase tracking-wide font-bold text-sm lg:text-xs">
								{users ? "Users" : "No users found"}
							</p>
							{!!users && users.map((user =>
								<li key={user.id} onClick={() => this.getUser(user)} className="list-reset cursor-pointer mb-3 lg:mb-2">
									{user.name}
								</li>
							))}
						</div>
					</nav>
				</div>
			</div>
		)
	}
}

export default Sidebar;