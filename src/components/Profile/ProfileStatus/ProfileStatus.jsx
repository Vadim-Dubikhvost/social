import React from 'react';
import css from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateUserStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		})
	}

	render() {
		return (
			<div className={css.status}>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || "ChangeStatus"}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} className={css.status__input} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" />
					</div>
				}
			</div>
		)
	}
};

export default ProfileStatus;