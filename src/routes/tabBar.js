import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import {createBottomTabNavigator} from "react-navigation";
import Home from '../container/home/home';
import Mine from '../container/mine/mine';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Tab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel:false,
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarPosition: 'bottom',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: '#41549F',
        inactiveTintColor: '#E8E8E8',
    },
    animationEnabled: true,
    swipeEnabled: false,
    //是否可以滑动切换
    swipeEnabled: true,
    //切换是否有动画
    animationEnabled: true,
    //进入App的首页面
    initialRouteName: 'Home',
    //对于导航的设置
    tabBarOptions: {
        //android特有下划线的颜色1
        indicatorStyle: {height: 0},
        //文字的样式
        labelStyle: {
            fontSize: 10
        },
        //对于导航的stytles
        style :{
            borderTopColor:'#ebebeb',
            borderTopWidth:1,
            backgroundColor:'white',
            height:Dimensions.get('window').height*0.08,
        }
    }
});