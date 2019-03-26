import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

 export default class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About', 
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>About text text text text text!</Text>
            </View>
        );
    }

 }

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });