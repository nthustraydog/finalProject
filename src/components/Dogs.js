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

import Each from './each_dog';
import NavHeader from './NavHeader';

import {setID, setEachDisplay} from '../states/all-actions';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Dogs extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        handleIdchange: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            fadeIn: new Animated.Value(0),
            fadeOut: new Animated.Value(1),
        };

        this.handleSetId = this.handleSetId.bind(this);
        this.handleSetDisplay = this.handleSetDisplay.bind(this);
    }

    componentDidMount() {
        Animated.timing(
          this.state.fadeIn,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
          }
        ).start();
    }

    handleSetId(ID) {
        this.props.dispatch(setID(ID));

    }
    handleSetDisplay(display) {
        if(display === true)
          this.state.fadeOut.setValue(1);

        this.props.dispatch(setEachDisplay(display));
    }

    processAnimation() {
        Animated.timing(
          this.state.fadeOut,
          {
            toValue: 0,
            duration: 300,
            easing: Easing.linear
          }
        ).start((animation) => {
          if(animation.finished) {
            this.handleSetDisplay(false);
          }
        });
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const {id, eachdogDisplay} = this.props.id;
        const {fadeOut} = this.state;
        const dialogTranslateY = fadeOut.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: 'clamp'
        });

        let dialog;

        if(eachdogDisplay) {
          dialog = (
            <View style = {styles.dialogWindow}>
              <TouchableOpacity style = {styles.dialog} onPress = {() => {
                    //this.handleSetDisplay(false);
                    this.processAnimation();
                }}>
              </TouchableOpacity>

              <Animated.View style = {[styles.dialogContent, {
                  opacity: this.state.fadeOut,
                  transform: [
                      {
                          translateY: dialogTranslateY
                      }
                  ]
                }]}>
                <Each id = {id} navigate = {navigate} adopt = {false}/>
              </Animated.View>
            </View>

          );
        }
        else dialog = (
          <Animated.ScrollView style={{backgroundColor: 'white', opacity: this.state.fadeIn}}>
            <View style={styles.container}>
                <View style = {styles.row}>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Hau_mei");
                      this.handleSetDisplay(true);
                    }}>
                      <Image source={require('../images/畫眉.jpg')} style = {styles.image}>
                        <View style = {styles.cover}></View>
                        <Text style = {styles.imageContent}>
                          畫眉
                        </Text>
                      </Image>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("A_gun");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/阿幹.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        阿幹
                      </Text>
                    </Image>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Lally");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/小豬.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        小豬
                      </Text>
                    </Image>
                  </TouchableHighlight>
               </View>
                <View style = {styles.row}>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("A_Vai");
                      this.handleSetDisplay(true);
                    }}>
                      <Image source={require('../images/阿醜.jpg')} style = {styles.image}>
                        <View style = {styles.cover}></View>
                         <Text style = {styles.imageContent}>
                           阿醜
                         </Text>
                      </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("O_tun");
                      this.handleSetDisplay(true);
                    }}>
                      <Image source={require('../images/黑糖.jpg')} style = {styles.image}>
                        <View style = {styles.cover}></View>
                        <Text style = {styles.imageContent}>
                          黑糖
                        </Text>
                      </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Jimmy");
                      this.handleSetDisplay(true);
                    }}>
                      <Image source={require('../images/布丁.jpg')} style = {styles.image}>
                        <View style = {styles.cover}></View>
                        <Text style = {styles.imageContent}>
                          布丁
                        </Text>
                      </Image>
                  </TouchableHighlight>
                </View>

                <View style = {styles.row}>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Good_dog");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/乖狗.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        乖狗
                      </Text>
                    </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Superman");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/超人.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        超人
                      </Text>
                    </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Meatball");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/小丸子.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        小丸子
                      </Text>
                    </Image>
                  </TouchableHighlight>
                </View>

                <View style = {styles.row}>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Sam");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/傷傷.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        傷傷
                      </Text>
                    </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Golden");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/金毛.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        金毛
                      </Text>
                    </Image>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                      this.handleSetId("Eric");
                      this.handleSetDisplay(true);
                    }}>
                    <Image source={require('../images/巧虎.jpg')} style = {styles.image}>
                      <View style = {styles.cover}></View>
                      <Text style = {styles.imageContent}>
                        巧虎
                      </Text>
                    </Image>
                  </TouchableHighlight>
                </View>
            </View>
          </Animated.ScrollView>
        );

        return (

          <NavHeader navigate={navigate} goBack={goBack} title='校園狗狗們'>
            {dialog}
          </NavHeader>
        );
      }
}

const styles = StyleSheet.create({

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12
  },
  box: {
    width: width/3.5,
    height: width/3.5,
    marginLeft: 5,
    marginRight: 5,
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  },
  touchButton: {
    width: width/3.5,
    height: width/3.5,
  },
  image: {
      flex: 1,
      width: null,
      alignItems: 'center',
      justifyContent: 'center'
  },
  cover: {
      position: 'absolute',
      width: width/3.5,
      height: width/3.5,
      backgroundColor: 'rgba(50,50,50, 0.6 )',
  },
  imageContent: {
        width: width/3.5,
        color: '#ffffff',
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        textAlign: 'center',
  },
  dialogWindow: {
      flex: 1,
      position: 'absolute',
      backgroundColor: 'white',
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center'
  },
  dialog: {
      width: width,
      height: height,
      position: 'absolute',
      zIndex: 10,
      backgroundColor: 'rgba(180,180,180,0.7)',
  },
  dialogContent: {
      width: width*0.95,
      height: height*0.8,
      backgroundColor: 'rgba(255,255,255,1)',
      zIndex: 20,
  }
});

export default connect(state => ({
    id: state.id,
    eachdogDisplay: state.eachdogDisplay
}))(Dogs);
