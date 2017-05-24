import React,{Component} from 'react';  
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity 
} from 'react-native';  
import NavigationBar from '../components/NavigationBar'
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
            <View style={styles.container}>  
                <NavigationBar
                    title={'Chat'+params.user} 
                    leftButton={
                        <TouchableOpacity  onPress={()=>goBack()}>
                            <Image style={{width:30,height:30}} source={{uri:'http://www.mfancms.com/douban/images/ic_bar_back_green.png'}} />
                        </TouchableOpacity>
                    }
                    rightButton={
                        <View>
                            <Image style={{width:30,height:30}} source={{uri:'http://www.mfancms.com/douban/images/ic_action_share_green.png'}} />
                        </View>
                    }
                    style={{backgroundColor:'#f7f7f7'}} 
                />
                <TouchableOpacity  onPress={()=>goBack()}>
                    <Text>Button</Text>
                </TouchableOpacity>
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