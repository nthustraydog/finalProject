import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
    Button
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {TextInput, StyleSheet , ScrollView , Picker , Image} from 'react-native';
import {Icon} from 'native-base';
// var { Icon, } = require('react-native-icons');
import {Content,Input} from 'native-base';
import {connect} from 'react-redux';
import BarcodeScanner from 'react-native-barcodescanner';
import {NavigationActions} from 'react-navigation';

import {transferData, goBackAccom} from '../states/qrcode-actions';

class QrcodeScreen extends React.Component {
    static propTypes = {

        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
     torchMode: 'off',
     cameraType: 'back',
    };
        this.barcodeReceived = this.barcodeReceived.bind(this);
    }

    render() {
      const {navigate} = this.props.navigation;
      return (

            <BarcodeScanner
              onBarCodeRead={this.barcodeReceived}
              style={{ flex: 1 }}
              torchMode={this.state.torchMode}
              cameraType={this.state.cameraType}
            />



    );
    }
    barcodeReceived(e) {
      const {navigate, goBack, pop} = this.props.navigation;
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);

    this.props.dispatch(transferData(e.data));
    //this.props.dispatch(goBackAccom());
    goBack();
  }

}
export default connect((state) => ({
    data: state.qrcode.data,
    goCamera: state.qrcode.goCamera
}))(QrcodeScreen);
