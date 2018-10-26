import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    NetInfo
} from 'react-native';
import {connect} from 'react-redux';
import NetWorkTool from '../../utils/netWorkTool'
import Toast from '@remobile/react-native-toast'

class NetInfoDemo extends Component {

    constructor(props) {
        super(props)
        this.state={       
        }
        this.handleMethod = this.handleMethod.bind(this);
    }

    handleMethod(isConnected){
       console.log('test', (isConnected ? 'online' : 'offline'));
   }

    componentWillMount() {
        NetWorkTool.checkNetworkState((isConnected)=>{
            if(!isConnected){
                Toast.showShortCenter(NetWorkTool.NOT_NETWORK);
            }
        });
        
        NetWorkTool.removeEventListener(NetWorkTool.TAG_NETWORK_CHANGE,this.handleMethod);
    }
 
    componentWillUnmount() {
        NetWorkTool.removeEventListener(NetWorkTool.TAG_NETWORK_CHANGE,this.handleMethod);
    }
    
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10
    },
});

const mapStateToProps = state => ({
    nav: state.nav,
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetInfoDemo)