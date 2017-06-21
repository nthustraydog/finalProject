import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Animated, Easing,
    StyleSheet,
    View, Platform,
    ListView, RefreshControl,
    Image, Text,
    ScrollView, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import {goToCamera, goBackAccom} from '../states/qrcode-actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Dummy extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const {navigate} = this.props.navigation;

        if(this.props.goCamera)
            navigate('QRCODE');
    }

    componentWillReceiveProps(nextProps) {
        const {navigate, goBack} = this.props.navigation;
        const {dispatch} = this.props;

        if(!nextProps.goCamera) {
            goBack();
        }
    }

    render() {
        return (
            <View>
              <Text>Redirect...</Text>
            </View>
        );
    }
}


export default connect(state => ({
    goCamera: state.qrcode.goCamera
}))(Dummy);
