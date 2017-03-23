// Import libraries for making a Component
import React from 'react';
import { View } from 'react-native';

// Make a Component
const Card = (props) => {
	const { containerStyle } = styles;

	// Any time we pass a component we write another component we write,
	// ... it will show up as {props.children}.
	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

// Export the Component (make available to other parts of the App)
export default Card;
