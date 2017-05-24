import React from 'react';  
import {   
    Text,
    View,
    Button,  
} from 'react-native';  
import { StackNavigator } from 'react-navigation';  
import ChatScreen from './src/page/ChatScreen';  
import HomeScreen from './src/page/HomeScreen';  
//让安卓实现push动画
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

const SimpleApp = StackNavigator({  
    Home: {screen: HomeScreen},  
    Chat:{screen:ChatScreen},  
},{//让安卓实现push动画
    headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
});  
 
export default SimpleApp;  