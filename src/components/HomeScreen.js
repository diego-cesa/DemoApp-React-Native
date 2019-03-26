import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 export default class HomeScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Testing Demo App!</Text>
                <Button title="Details" 
                    onPress={()=> this.props.navigation.navigate('Details')}/>
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