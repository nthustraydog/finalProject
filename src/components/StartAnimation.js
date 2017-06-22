import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Animated, Easing,
    StyleSheet,
    View, Platform,
    ListView, RefreshControl,
    Image, Text, Button,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import {enterHome} from '../states/each-actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class StartAnimation extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            move: new Animated.Value(0)
        };
    }
    componentDidMount() {
      const {navigate, goBack} = this.props.navigation;

      Animated.timing(
        this.state.move,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }
      ).start((animation) => {
          if(animation.finished) {
            Animated.timing(
              this.state.move,
              {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce
              }
            ).start();
          }
      });

      setTimeout(() => {
        this.setState({
          visible: false
        });
        navigate('Home');
      }, 2000);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const {visible, move} = this.state;

        const TranslateY = move.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -100],
            extrapolate: 'clamp'
        });

        return (
            <View>
              <View style = {{
                  width: width,
                  height: height,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgb(229, 198, 236)'
              }}>
                  <Animated.View style = {{
                      width: width*0.8,
                      alignItems: 'center',
                      transform: [
                          {
                              translateY: TranslateY
                          }
                      ]
                  }}>
                    <Image source = {require('../images/logo.png')}/>
                  </Animated.View>
              </View>
            </View>
        );
    }
}

export default connect(state => ({
    loading: state.eachdog.loading,
}))(StartAnimation);
