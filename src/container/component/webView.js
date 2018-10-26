import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {connect} from 'react-redux';
import WebViewAndroid from 'react-native-webview-android'

class WebViewDemo extends Component {

    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <WebViewAndroid
                    javaScriptEnabled={true}
                    geolocationEnabled={false}
                    builtInZoomControls={false}
                    // injectedJavaScript={this.javascriptToInject()}
                    // onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    // onNavigationStateChange={this.onNavigationStateChange}
                    // onMessage={this.onMessage}
                    source={{uri:'https://test.cpcn.com.cn/BankSimulator/WeChatQR?18091311448176890655'}} // or use the source(object) attribute...
                    style={styles.containerWebView}
                />

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
    containerWebView:{
        flex: 1,
    }
});

const mapStateToProps = state => ({
    nav: state.nav,
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebViewDemo)