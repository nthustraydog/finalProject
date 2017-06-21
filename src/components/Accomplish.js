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
import NavHeader from './NavHeader';

import {getUserAccomplish, setUserAccomplish, clearUserAccomplish} from '../api/dog';
import {getAccomplish} from '../states/each-actions';
import {goToCamera} from '../states/qrcode-actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Accomplish extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        handleIdchange: PropTypes.func,
        data: PropTypes.string,
        loading: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            point: 0,
            accomplish: 0,
            avai: false,
            dingding: false,
            eric: false,
            golden: false,
            gooddog: false,
            heilulu: false,
            jimmy: false,
            lally: false,
            peach: false,
            meatball: false,
            pidan: false,
            wolf: false,
            mask: new Animated.Value(1),
            cover: false
        };
        //clearUserAccomplish();
        this.props.dispatch(getAccomplish(this.props.loading));
    }
    componentDidMount() {
      const userData = getUserAccomplish();


      userData.then((data) => {
          const accomplish = JSON.parse(data);
          const x = new Animated.Value(1);

          this.setState({
              ...accomplish,
              mask: x,
              cover: false
          });
      });
    }

    componentWillReceiveProps(nextProps) {
      const {data} = nextProps;

      if(nextProps.data !== this.props.data){
          this.state.mask.setValue(1);
          this.setState({
              cover: true
          }, () => {

              this.unlockDisplayShow();
          });

      }


      if(data) {
        const {
          point, accomplish, avai, dingding, eric, golden, gooddog, heilulu, jimmy, lally, peach, meatball, pidan, wolf} = this.state;

        switch (data) {
          case 'avai':
            if(!avai) {

                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        avai: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;
          case 'dingding':
            if(!dingding) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 15,
                        dingding: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'eric':
            if(!eric) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        eric: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'golden':
            if(!golden) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        golden: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;
          case 'gooddog':
            if(!gooddog) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        gooddog: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'heilulu':
            if(!heilulu) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        heilulu: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'jimmy':
            if(!jimmy) {
              this.setState((prevState, props) => {
                  return {
                      point:  prevState.point + 10,
                      jimmy: true,
                      accomplish: prevState.accomplish + 1,
                  };
              }, () => {
                  setUserAccomplish(this.state);
              });
              //make request to server(update point, flag)
            }
            break;

          case 'lally':
            if(!lally) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        lally: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'meatball':
            if(!meatball) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 15,
                        meatball: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'peach':
            if(!peach) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        peach: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'pidan':
            if(!pidan) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        pidan: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          case 'wolf':
            if(!wolf) {
                this.setState((prevState, props) => {
                    return {
                        point:  prevState.point + 10,
                        wolf: true,
                        accomplish: prevState.accomplish + 1,
                    };
                }, () => {
                    setUserAccomplish(this.state);
                });
                //make request to server(update point, flag)
            }
            break;

          default:

        }
      }
    }

    returnPictureAlready(id) {
      switch (id) {
        case 'avai':
          if(this.state.avai)
              return require('../images/thumb/avai.jpg');
          else
              return require('../images/thumb/avai2.jpg');
        case 'dingding':
          if(this.state.dingding)
              return require('../images/thumb/dingding.jpg');
          else
              return require('../images/thumb/dingding2.jpg');
        case 'eric':
          if(this.state.eric)
              return require('../images/thumb/eric.jpg');
          else
              return require('../images/thumb/eric2.jpg');
        case 'golden':
          if(this.state.golden)
              return require('../images/thumb/golden.jpg');
          else
              return require('../images/thumb/golden2.jpg');
        case 'gooddog':
          if(this.state.gooddog)
              return require('../images/thumb/gooddog.jpg');
          else
              return require('../images/thumb/gooddog2.jpg');
        case 'heilulu':
          if(this.state.heilulu)
              return require('../images/thumb/heilulu.jpg');
          else
              return require('../images/thumb/heilulu2.jpg');
        case 'jimmy':
          if(this.state.jimmy)
              return require('../images/thumb/jimmy.jpg');
          else
              return require('../images/thumb/jimmy2.jpg');
        case 'lally':
          if(this.state.lally)
              return require('../images/thumb/lally.jpg');
          else
              return require('../images/thumb/lally2.jpg');
        case 'meatball':
          if(this.state.meatball)
              return require('../images/thumb/meatball.jpg');
          else
              return require('../images/thumb/meatball2.jpg');
        case 'peach':
          if(this.state.peach)
              return require('../images/thumb/peach.jpg');
          else
              return require('../images/thumb/peach2.jpg');
        case 'pidan':
          if(this.state.pidan)
              return require('../images/thumb/pidan.jpg');
          else
              return require('../images/thumb/pidan2.jpg');
        case 'wolf':
          if(this.state.wolf)
              return require('../images/thumb/wolf.jpg');
          else
              return require('../images/thumb/wolf2.jpg');
        default:

      }
    }

    returnPicture(params, id) {
      if(params) {
        if(params !== id)
          return this.returnPictureAlready(id);

        switch (params) {
          case 'avai':
            return require('../images/thumb/avai.jpg');

          case 'dingding':
            return require('../images/thumb/dingding.jpg');

          case 'eric':
            return require('../images/thumb/eric.jpg');

          case 'golden':
            return require('../images/thumb/golden.jpg');

          case 'gooddog':
            return require('../images/thumb/gooddog.jpg');

          case 'heilulu':
            return require('../images/thumb/heilulu.jpg');

          case 'jimmy':
            return require('../images/thumb/jimmy.jpg');

          case 'lally':
            return require('../images/thumb/lally.jpg');

          case 'meatball':
            return require('../images/thumb/meatball.jpg');

          case 'peach':
            return require('../images/thumb/peach.jpg');

          case 'pidan':
            return require('../images/thumb/pidan.jpg');

          case 'wolf':
            return require('../images/thumb/wolf.jpg');

          default:

        }
        return params.data;
      }
      else {
          return this.returnPictureAlready(id);
      }
    }

    unlockDisplayShow() {
      Animated.timing(
          this.state.mask,
          {
            toValue: 0,
            delay: 2000,
            duration: 6000,
            easing: Easing.linear
          }
      ).start((animation) => {
          if(animation.finished) {
              this.setState({
                  cover: false
              });
          }
      });
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const {data, loading, dispatch} = this.props;
        const {point, accomplish} = this.state;
        const dogPicture = [
            this.returnPicture(data, 'avai'),
            this.returnPicture(data, 'dingding'),
            this.returnPicture(data, 'eric'),
            this.returnPicture(data, 'golden'),
            this.returnPicture(data, 'gooddog'),
            this.returnPicture(data, 'heilulu'),
            this.returnPicture(data, 'jimmy'),
            this.returnPicture(data, 'lally'),
            this.returnPicture(data, 'meatball'),
            this.returnPicture(data, 'peach'),
            this.returnPicture(data, 'pidan'),
            this.returnPicture(data, 'wolf')
        ];
        const unlock = this.returnPicture(data, data);

        console.log(this.state.cover);

        let page = (
          <View style = {{backgroundColor: 'white'}}>
              <Animated.View style = {{
                      ...StyleSheet.absoluteFillObject,
                      zIndex: 20,
                      opacity: this.state.mask,
                      width: (this.state.cover)? width : 0,
                      height: (this.state.cover)? height : 0,
                      backgroundColor: '#ffffff',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                    <View>
                      <Image source={unlock} style = {{
                          width: width*0.6,
                          height: width*0.6
                        }}/>
                      <View style = {{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image source={require('../images/unlock.svg.png')} style = {{
                              width: 30,
                              height: 30
                          }}/>
                        <Text style = {{
                              fontSize: 30
                          }}>
                          解鎖
                        </Text>
                      </View>
                    </View>
              </Animated.View>

              <View>
                <View style = {styles.accomHeader}>
                  <View style = {styles.pointDisplay}>
                    <Text style = {styles.pointText}>
                      累計點數：{'\n'}
                      <Text style = {{fontSize: 30}}>
                        {point}
                      </Text>
                    </Text>
                  </View>
                  <TouchableOpacity style = {styles.lockDisplay}>
                    <Text style = {styles.lockText}>
                      尚未解鎖：{12-accomplish}隻
                      {'\n'}
                      已解鎖：{accomplish}隻
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style = {{
                    alignSelf: 'center',
                    width: width *0.8
                  }}>
                  <Button title = {"掃描"} onPress = {() => {
                        //dispatch(goToCamera());
                        navigate('QRCODE');
                    }} disabled = {this.state.cover}/>

                </View>


                <View style={styles.container}>
                    <View style = {styles.row}>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("avai");
                        }}>
                        <Image source={dogPicture[0]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Dingding");
                        }}>
                        <Image source={dogPicture[1]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>

                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Eric");
                        }}>
                        <Image source={dogPicture[2]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                   </View>
                    <View style = {styles.row}>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Golden");
                        }}>
                          <Image source={dogPicture[3]} style = {styles.image}>

                          </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("gooddog");
                        }}>
                          <Image source={dogPicture[4]} style = {styles.image}>


                          </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Heilulu");
                        }}>
                          <Image source={dogPicture[5]} style = {styles.image}>

                          </Image>
                      </TouchableHighlight>
                    </View>

                    <View style = {styles.row}>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("jimmy");
                        }}>
                        <Image source={dogPicture[6]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Lally");
                        }}>
                        <Image source={dogPicture[7]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Meatball");
                        }}>
                        <Image source={dogPicture[8]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                    </View>

                    <View style = {styles.row}>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Peach");
                        }}>
                        <Image source={dogPicture[9]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Pidan");
                        }}>
                        <Image source={dogPicture[10]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                      <TouchableHighlight style={[styles.box, styles.box1]} onPress = {() => {
                          console.log("Wolf");
                        }}>
                        <Image source={dogPicture[11]} style = {styles.image}>

                        </Image>
                      </TouchableHighlight>
                    </View>
                </View>
              </View>

          </View>
        );

        return (
          <NavHeader navigate={navigate} goBack={goBack} title='成就簿'>
            <Spinner
              visible={loading}
              textContent={"載入中..."}
              textStyle={{color: '#FFF'}}
              overlayColor = {"rgba(226, 175, 228, 1)"}
            />
            <ScrollView>
              {!loading && page}
            </ScrollView>
          </NavHeader>

        );
      }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 40,
    backgroundColor: '#CB62BF',
    paddingTop: 4,
    paddingBottom: 4,
  },
  backArrow: {
    position: 'absolute',
    left: 0,
    top: 4,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
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
  pointDisplay: {

  },
  lockDisplay: {
      backgroundColor: 'rgb(255,223,163)',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 10
  },
  pointText: {
      textAlign: 'right',
  },
  lockText: {
      textAlign: 'right',
  },
  accomHeader: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 10,
      marginBottom: 10,
  }
});

export default connect(state => ({
    data: state.qrcode.data,
    goCamera: state.qrcode.goCamera,
    loading: state.eachdog.loading,
}))(Accomplish);
