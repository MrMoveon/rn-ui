import React from 'react';  
import {   
    Text,View,Button,  
} from 'react-native';  
import { StackNavigator } from 'react-navigation';  
import ChatScreen from './page/ChatScreen';  
import HomeScreen from './page/HomeScreen';  
const SimpleApp = StackNavigator({  
    Home: {screen: HomeScreen},  
    Chat:{screen:ChatScreen},  
},{
    mode:'modal'
});  
 
export default SimpleApp;  