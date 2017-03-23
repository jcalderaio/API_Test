// Import libraries for making a Component
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a Component
export default class Button extends Component {

	getTextStyles() {
		return {
			alignSelf: 'center',
			color: this.props.textColor,
			fontSize: 16,
			fontWeight: '600', //Boldness
			paddingVertical: 10  // Space above and below
		};
	}

	getButtonStyles() {
		return {
			flex: 1,
			backgroundColor: this.props.backgroundColor,
			borderWidth: 1,
			borderRadius: 5,
			marginHorizontal: 5,
			borderColor: this.props.borderColor,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.3,
			shadowRadius: 2
		};
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPressButton} style={this.getButtonStyles()}>
				<Text style={this.getTextStyles()}>
					{this.props.children}
				</Text>
			</TouchableOpacity>
		);
	}
}
