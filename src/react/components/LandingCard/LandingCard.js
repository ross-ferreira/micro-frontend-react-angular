import React from 'react';

const LandingCard = ({handleClick}) => {
	return (
		<div className="row">
			<div className="col s3 m0"></div>
			<div className="col s6 m0">
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<h3 className="card-title">React Modal</h3>
						<ul className="">
							<li>
								<b>Article:</b> 123456
							</li>
							<li>
								<b>Date:</b> 01/01/01
							</li>
							<br />
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</li>
						</ul>
					</div>
					<div className="card-action">
						<a className="btn waves-effect waves-light cyan pulse" onClick={handleClick}>
							View
						</a>
					</div>
				</div>
			</div>
			<div className="col s3 m0"></div>
		</div>
	);
};

export default LandingCard;
