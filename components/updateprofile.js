import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import firebase from '../database/firebase';

const CleverTap = require('clevertap-react-native');

export default class updateprofile extends Component {

  // state: { 
  //   phone: '', 
  //   country: '', 
  // } 

  constructor(props) {
    super(props);
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      phone: '+91',
      country : ''
    }
  }

  update = () => {

    if(this.state.phone === '' || this.state.country === '') {
      Alert.alert('Enter Phone Number and Country')
    } else if(this.state.phone.length < 10 )
    {
        Alert.alert('Enter proper Phone Number')
    }else {
      console.log(this.state.phone)
      var phonenumber = this.state.phone;

      if(!phonenumber.includes(+91))
      {
          phonenumber = "+91"+phonenumber; 
          console.log(phonenumber)
      }

      var country = this.state.country;

      CleverTap.profileSet({'Phone': phonenumber,'Country': country});

      CleverTap.recordEvent('Profile Updated', {'Phone': phonenumber, 'Country': country});
      
      this.props.navigation.replace('Dashboard')
    }
  }  


onPasswordChange(phone) {
     let s = this.state;
     s.phone = phone;
     this.setState(s);   
  }

onCountryChange(country) {
     let s = this.state;
     s.country = country;
     this.setState(s);   
  }

  render() {
    // this.state = { 
    //   displayName: firebase.auth().currentUser.displayName,
    //   phone: '', 
    //   country: '', 
    // }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
       
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone Number"
          keyboardType={'numeric'}
          returnKeyLabel = {"next"}
          maxLength={13}
          onChangeText={phone => this.setState({phone})}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Country"
          returnKeyLabel = {"next"}
          onChangeText={country => this.setState({country})}
        />

        <Button
          color="#3740FE"
          title="Update Profile"
          onPress={() => {this.update()
              // if(this.state.phone === '' || this.state.country === '') {
              //     Alert.alert('Enter details to update!')
              // } else {
                  // console.log(this.state.phone)
                  //this.props.navigation.navigate('Dashboard')
              // }
            } 
          }
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
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});