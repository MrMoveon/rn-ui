import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import NavigationBar from '../components/NavigationBar'
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
       
        <NavigationBar
          title={'首页'} 
          style={{backgroundColor:'#f7f7f7'}} />
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#fff'
   }
})