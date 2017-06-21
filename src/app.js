import React from 'react';
import {BackHandler, View, Text} from 'react-native';

import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';


import All from './components/all_dog';
import Adopt from './components/Adopt';
import AdoptApply from './components/AdoptApply';
import BathScreen from './components/bath';
import EventScreen from './components/event';
import QrcodeScreen from './components/qrcode';
import Accomplish from './components/Accomplish';
import Dummy from './components/Dummy';
import PublicScreen from './components/public';
import ActivityScreen from './components/ActivityScreen';
import IntroScreen from './components/IntroScreen';
import QuestionScreen from './components/QuestionScreen';
import HomeScreen from './components/HomeScreen';
import ForumScreen from './components/ForumScreen';
import PostScreen from './components/PostScreen';
import PostFormScreen from './components/PostFormScreen';

import {toggleNavbar} from './states/main-actions';
import {setID} from './states/all-actions';

import {id} from './states/all-reducers';
import {eachdog} from './states/each-reducers';
import {qrcode} from './states/qrcode-reducers';
import {forum, postForm, post} from './states/forum-reducers';

import {StackNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';


const AppNavigator = StackNavigator({
    校園狗狗們: {screen: All},
    認養: {screen: Adopt},
    認養申請: {screen: AdoptApply},
    事件通報: {screen: EventScreen},
    洗狗: {screen: BathScreen},
    QRCODE: {screen: QrcodeScreen},
    成就簿: {screen: Accomplish},
    Promote: {screen: PublicScreen},
    Activity: {screen: ActivityScreen},
    Intro: {screen: IntroScreen},
    Question: {screen: QuestionScreen},
    Home: {screen: HomeScreen}, // 0
    Forum: {screen: ForumScreen}, // 9
    Post: {screen: PostScreen},
    PostForm: {screen: PostFormScreen},
}, {
    headerMode: 'none'
});

class AppWithStyleAndNavigator extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}/>
            </StyleProvider>
        );1
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const {dispatch, nav} = this.props;
            if (nav.index === 0)
                return false;
            dispatch(NavigationActions.back())
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }


}

const AppWithNavState = connect(state => ({
    nav: state.nav
}))(AppWithStyleAndNavigator);

// Nav reducer
const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'Home'}));
const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

// Create Redux store
const store = createStore(combineReducers({
    id,
    nav,
    eachdog,
    qrcode,
    forum,
    postForm,
    post
}), compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavState/>
            </Provider>
        );
    }
}
