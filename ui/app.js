import React from 'react';  
import {  
    AppRegistry,  
    Text,View,Button,  
} from 'react-native';  
import { StackNavigator } from 'react-navigation';  
import ChatScreen from './ChatScreen';  
class HomeScreen extends React.Component {  
    static navigationOptions = {  
        title: '首页',//设置标题内容  
    };  
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            <View>  
                <Text>Hello, Navigation!</Text>  
                <Button  
                    onPress={() => navigate('Chat',{user:'我是chat'})}  
                    title="Chat with Lucy"/>  
            </View>  
        );  
    }  
}  
  
const SimpleApp = StackNavigator({  
    Home: {screen: HomeScreen},  
    Chat:{screen:ChatScreen},  
  
});  
  
export default SimpleApp;  