import React from 'react';
import e from '../event-bus';

import LandingCard from './components/LandingCard/LandingCard';
import Navbar from './components/Navbar/Navbar';

export default class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			showDoc: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			loading: true,
		});

		setTimeout(() => {
			console.log('timer');
			this.setState({
				loading: false,
				showDoc: true,
			});
			this.openDoc();
		}, 3000);
	}

	openDoc() {
		e.emit('openDoc', { isOpen: true });
	}

	render() {
		return (
			<div>
				<Navbar />
				{!this.state.showDoc && !this.state.loading && <LandingCard handleClick={this.handleClick} />}
				{this.state.loading && (
					<div className="progress">
						<div className="indeterminate"></div>
					</div>
				)}
			</div>
		);
	}
}
