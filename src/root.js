
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from '../app';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import {AppNavigator} from './routes/routes';

const store = configureStore();

export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
              <AppNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Root);
