import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/Action';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


 class DetailsScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Details', 
        headerLeft: <Ionicons name={'md-arrow-back'} size={30}
                        onPress={ () => { navigation.goBack() }} />,
    });

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}
                    onChangeText={(text)=>{this.props.updateKey('name', text)}}/>

                <TextInput style={styles.input}
                    editable={false}
                    multiline
                    numberOfLines={4}
                    value={'name: ' + this.props.name}
                    />
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateKey: (key, value) => {
            dispatch(action.updateKey(key, value));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1, 
        width: 200
    }
  });