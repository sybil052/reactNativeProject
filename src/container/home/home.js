import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    SectionList,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {connect} from 'react-redux';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    
    }

    
    render() {
        // console.log('========'+JSON.stringify(this.state.dataSource));
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{fontSize: 18, textAlign:'center',alignSelf:'center',fontWeight:'bold'}}>首页</Text>
                    </View>
                    <View style={styles.divideLine}/>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.push('SectionList');
                }}>
                    <View style={{backgroundColor:'#F5FCFF'}}>
                        <Text style={{fontSize: 18, padding:15, color:'#333'}}>分组折叠列表</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.push('Loading');
                }}>
                    <View style={{backgroundColor:'#F5FCF0'}}>
                        <Text style={{fontSize: 18, padding:15, color:'#333'}}>loading框</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.push('Slider');
                }}>
                    <View style={{backgroundColor:'#F5FCFF'}}>
                        <Text style={{fontSize: 18, padding:15, color:'#333'}}>选择范围值</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.push('NetInfo');
                }}>
                    <View style={{backgroundColor:'#F5FCF0'}}>
                        <Text style={{fontSize: 18, padding:15, color:'#333'}}>检测网络</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.push('WebView');
                }}>
                    <View style={{backgroundColor:'#F5FCF0'}}>
                        <Text style={{fontSize: 18, padding:15, color:'#333'}}>webView</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header:{
        height: 64,
        paddingTop: 14,
        backgroundColor:'white',
    },
    textStyle:{
        fontSize: 15,
        marginLeft: 5,
        padding: 5,
    },
    divideLine:{
        height: 1,
        backgroundColor: '#e8e8e8',
    },

});

const mapStateToProps = state => ({
    nav: state.nav,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)