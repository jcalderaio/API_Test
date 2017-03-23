// Import libraries for making a Component
import React from 'react';
import { View } from 'react-native';

// Make a Component
const CardSection = (props) => {
	const { containerStyle } = styles;

	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 10,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

// Export the Component (make available to other parts of the App)
export default CardSection;
