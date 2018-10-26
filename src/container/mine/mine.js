import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux';

class Mine extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{fontSize: 18, textAlign:'center',alignSelf:'center',fontWeight:'bold'}}>我的</Text>
                    </View>
                    <View style={styles.divideLine}/>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine)