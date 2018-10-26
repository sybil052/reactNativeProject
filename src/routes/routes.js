import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    createStackNavigator,
} from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
  
import MainScreen from './tabBar';
import SectionListScreen from '../container/component/sectionList';
import LoadingScreen from '../container/component/loading';
import SliderScreen from '../container/component/slider';
import NetInfoScreen from '../container/component/netInfo';
import WebViewScreen from '../container/component/webView';

const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
  
const StackRouteConfigs = {
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        }
    },
    SectionList:{
        screen: SectionListScreen,
        navigationOptions: {
            title:'分组列表'
        },
    },
    Loading:{
        screen: LoadingScreen,
        navigationOptions: {
            title:'loading框'
        },
    },
    Slider:{
        screen: SliderScreen,
        navigationOptions: {
            title:'选择范围值'
        },
    },
    NetInfo:{
        screen: NetInfoScreen,
        navigationOptions: {
            title:'检测网络'
        },
    },
    WebView:{
        screen: WebViewScreen,
        navigationOptions: {
            title:'webView'
        },
    }
}
const StackNavigatorConfigs = {
    initialRouteName: 'Main', // 初始化哪个界面为根界面
    mode:'card', // 跳转方式：默认的card，在iOS上是从右到左跳转，在Android上是从下到上，都是使用原生系统的默认跳转方式。
    headerMode:'screen', // 导航条动画效果：float表示会渐变，类似于iOS的原生效果，screen表示没有渐变。none表示隐藏导航条
};
const RootNavigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, navMiddleware};
