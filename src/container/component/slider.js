import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Slider,
    Text,
} from 'react-native';
import {connect} from 'react-redux';

class SliderDemo extends Component {

    constructor(props) {
        super(props)
        this.state={
            value: 0,
            min: 0,
            max: 100,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Slider 
                    disabled={false} // 如果为true，不能移动滑块
                    maximumValue={this.state.max} // 滑块的最大值（当滑块滑到最右端时表示的值
                    minimumValue={this.state.min} // 滑块的最小值（当滑块滑到最左端时表示的值
                    maximumTrackTintColor={'#d9d9d9'} // 滑块右侧轨道的颜色
                    minimumTrackTintColor={'#0f00f0'} // 滑块左侧轨道的颜色
                    step={1}
                    onSlidingComplete={(value)=>{ // 松开滑块的时候调用此回调，无论值是否变化
                        console.log('currentValue=',value);
                        this.setState({value})
                    }}
                    onValueChange={(value)=>{ // 拖动滑块的过程中不断调用此回调
                        console.log('valueChange=',value);
                        // this.setState({value})
                    }}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.text}>{this.state.min}</Text>
                    <Text style={styles.text}>{this.state.max}</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={styles.text}>选择的值：{this.state.value}</Text>
                </View>
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
    text:{
        fontSize: 16
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderDemo)