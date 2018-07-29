import React, { Component } from 'react';

class Tried extends Component {
	render() {
		const numbers = this.props.value;
		const listItems = numbers.map(
			(number) => <li key={number.toString()}>{number}</li>
		);

		return (
			<div id="tried">Tried Password
				<ul>
					{listItems}
				</ul>
			</div>
		);

	}
}
export default Tried
