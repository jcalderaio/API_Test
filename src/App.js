import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';
import Spinner from './components/Spinner';


class App extends Component {

  constructor(props) {
    super(props);

    // Bind event handlers for the render method in the constructor
    this.onPressButton = this.onPressButton.bind(this);

    this.state = {
      text: '',
      loading: false
    };
  }

  onPressButton() {
    this.setState({
      loading: true
    });

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.text())
    .then((responseData) => {
        this.setState({
          text: responseData,
          loading: false
        });
      })
    .done();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="API_Test" />
        <ScrollView>
          <Card>
            <CardSection>
              {!this.state.text &&
                <View style={styles.centerContaner}>
                  <Text style={styles.titleText}>Click "Fetch" to retrieve data </Text>
                </View>
              }
              <Text>{this.state.text}</Text>
            </CardSection>
            <CardSection>
              {this.state.loading &&
                <Spinner size='small' />
              }
              {!this.state.loading &&
                <Button
                  textColor={'#fff'}
                  backgroundColor={'#007aff'}
                  borderColor={'#000'}
                  onPressButton={this.onPressButton}
                >
                  Fetch
                </Button>
              }

            </CardSection>
            <CardSection>
              <Button
                textColor={'#fff'}
                backgroundColor={'#007aff'}
                borderColor={'#000'}
                onPressButton={() => this.setState({ text: '' })}
              >
                Clear
              </Button>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  centerContaner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    padding: 5
  }
};

export default App;
