import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";
import { selectUser } from "../actions/selectUser";

class Sidebar extends Component {
	componentDidMount() {
		this.props.dispatch(fetchUsers());
	}

	render() {
		const { users } = this.props;

		return (
			<div className="mt-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
			>
				<div className="block lg:sticky">
					<nav
						className="px-3 lg:px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8"
					>
						<div className="mb-8">
							<p className="mb-3 lg:mb-2 text-grey uppercase tracking-wide font-bold text-sm lg:text-xs">
								{users ? "Users" : "No users found"}
							</p>
							{!!users && users.map((user =>
								<li key={user.id} onClick={() => this.props.dispatch(selectUser(user))} className="list-reset cursor-pointer mb-3 lg:mb-2">
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

const mapStateToProps = state => ({
	users: state.usersList.users
});

export default connect(mapStateToProps)(Sidebar);