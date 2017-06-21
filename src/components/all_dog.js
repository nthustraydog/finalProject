import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Image, Platform, Button} from 'react-native';

import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';


import Dogs from './Dogs';
import AllDogHeader from './AllDogHeader';
import NavHeader from './NavHeader';


export default class All extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);


    }


    render() {
            const {navigate, goBack} = this.props.navigation;

            return (
                <NavHeader navigate={navigate} goBack={goBack} title='校園狗狗們'>
                  <Dogs navigate = {navigate}/>
                </NavHeader>
            );
        }
}
