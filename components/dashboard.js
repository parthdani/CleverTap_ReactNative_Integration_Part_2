import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';

const CleverTap = require('clevertap-react-native');

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      CleverTap.recordEvent('Logout clicked');
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  updateProfile = () => {
    CleverTap.recordEvent('Update Profile clicked');
    this.props.navigation.navigate('Update Profile')
  } 

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
        <Text style = {styles.textStyle}>
          User Identity: {this.state.uid}
        </Text>
        <Button
          color="#3740FE"
          title="Update Profile"
          onPress={() => this.updateProfile()}
        />
        <Text style = {styles.textStyle}>
          ----------------------------
        </Text>

        <Button
          color="#3740FE"
          title="Logout "
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});