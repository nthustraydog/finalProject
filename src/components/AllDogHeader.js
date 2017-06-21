import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    View,Text,
    ListView, RefreshControl,
    Image,
    ScrollView
} from 'react-native';

import {Container, Icon, Fab, Button, Toast} from 'native-base';
import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';



export default class AllDogHeader extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        handleIdchange: PropTypes.func,
        id: PropTypes.string,
        scrollProps: PropTypes.object
    };

    constructor(props) {
        super(props);


    }


    render() {
            console.log(this.props);
            return (
                <View>
                    <Text>校園狗狗</Text>
                </View>
            );
        }
}

const styles = {

};
