import React,{Component,PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID=50;
const NAV_BAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;

export default class NavigationBar extends Component{
    static propTypes={
        title:PropTypes.string,
        titleView:PropTypes.element,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        style:View.propTypes.style,
        hide:PropTypes.bool,
    }
    
    constructor(props){
        super(props);
        this.state={
            title:'',
            hide:false
        }
    }
    render(){
        let titleView=this.props.titleView?this.props.titleView:<Text style={styles.title}>{this.props.title}</Text>;
        let content=<View style={[styles.navBar,this.props.style]}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>
        return (
            <View style={styles.container}>
                {content}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red',
    },
    navBar:{
        height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10 
    },
    titleViewContainer:{
        position:'absolute',
        left:40,
        right:40,
        alignItems:'center',
    },
    title:{
        fontSize:16,
        color:'#333'
    }
    
})


