import React,{Component} from 'react';  
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';  
export default class ChatScreen extends Component{  
    static navigationOptions = {  
        title:'Chat with Lucy',  
        header:null,
        headerTintColor: 'blue',
    };  
    
    render(){  
        const {goBack} = this.props.navigation;
        const {params} = this.props.navigation.state;  
        return(  
            <View>  
                <Text>Chat with {params.user}</Text>  
                <TouchableOpacity  onPress={()=>goBack()}>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({
    headers:{
        height:44,
        backgroundColor:'red',
        color:'#ffffff'
    }
})