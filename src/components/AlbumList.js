// Import libraries for making a Component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
// We use class based component instead of functional component when we want to
// ... fetch data or write a large Component with helper methods.

// Life cycle methods - knows when its about to be rendered or removed from screen
// ... can get notification with life cycle method. Can place on class.

// Make a Component
class AlbumList extends Component {

	state = { albums: [] };

	componentWillMount() {
		// ASYNC HTTP Request to get albums from the API.
        // eslint-disable-next-line
		// This returns a promise, so must add on ".then()"
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
			.then((data) => {
				this.setState({
					albums: data
				});
			}) //  ONlY change state with setState, not 'this.state = 123'
			.done();
	}

	renderAlbums() {
		// Each component inside the array must have a 'key' property associated
		// ... with it. Best to use 'ID' if array has.
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}

	// Lifecycle methods: knows whens its about to be rendered. Automatically called at some point.
}

// Export the Component (make available to other parts of the App)
export default AlbumList;
