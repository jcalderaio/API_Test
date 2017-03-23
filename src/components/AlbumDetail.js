// Import libraries for making a Component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Make a Component
const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;

	const {
		textContainer,
		thumbnailStyle,
		thumbnailContainer,
		headerTextStyle,
		coverImage
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
					<Image
						style={thumbnailStyle}
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={textContainer}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image
					style={coverImage}
					source={{ uri: image }}
				/>
			</CardSection>

			<CardSection>
				<Button pressed={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	textContainer: {
		flexDirection: 'column', // This is default. // Specifies direction of primary axis
		justifyContent: 'space-around'  // Specifies rule of primary axis
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {  // Must set a size for EVERY image
		height: 50,
		width: 50
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10  // Like setting left AND right
	},
	coverImage: {
		height: 300,
		flex: 1, 		//this will stretch it across the screen
		width: null
	}
};

// Export the Component (make available to other parts of the App)
export default AlbumDetail;
