import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    StyleSheet,
    View,
    Platform,
    ListView,
    RefreshControl,
    Image,
    Text,
    Button,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


import {getDog} from '../states/each-actions';
import {searchDog} from '../utilities/DogPicture';

const width = Dimensions.get('window').width;

class Each extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        id: PropTypes.string,
        dogInfo: PropTypes.object,
        loading: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        const {dispatch, id} = this.props;

        dispatch(getDog(id));
    }

    componentDidMount() {

    }


    render() {
        const {dogInfo, loading} = this.props;
        const {navigate, adopt} = this.props;

        let dog = (
            <View>
                <Spinner
                  visible={loading}
                  textContent={"載入中..."}
                  textStyle={{color: '#FFF'}}
                  overlayColor = {"rgba(226, 175, 228, 0.7)"}
                />
            </View>
        );



        if(dogInfo && !loading) {
          //  console.log(dogInfo.photos_big.length);
            const picture = searchDog(dogInfo.id);


            dog = (
                <ScrollView>
                  <View>
                    <View style = {styles.textContainer}>
                      <Text style = {styles.titleText}>{dogInfo.name}</Text>
                    </View>
                  </View>

                  <View style = {styles.thumbContainer}>
                    <Image source={picture[0]} style = {styles.thumb} onLoaded = {() => {

                      }}/>
                    <View style = {{
                        width: width*0.8,
                        marginTop: 20
                      }}>
                        <Text style = {styles.spot}>特徵、性格：</Text>
                        <View
                            style={{
                              borderBottomColor: 'black',
                              borderBottomWidth: 1,
                              marginBottom: 10
                            }}>
                        </View>

                        <Text>
                          {dogInfo.spot}
                          {'\n'}
                          {dogInfo.info}
                          {'\n'}
                        </Text>

                        <Text style = {styles.story}>小故事：</Text>
                        <View
                            style={{
                              borderBottomColor: 'black',
                              borderBottomWidth: 1,
                              marginBottom: 10
                            }}>
                        </View>
                        <Text>{dogInfo.story}</Text>
                    </View>
                  </View>
                </ScrollView>
            );
        }
        let text = adopt? '認養我吧' : '來洗我吧';
        return (
          <View style = {{
              paddingBottom: 50 ,
            }}>

              <ScrollView>
                  {dog}
              </ScrollView>

              {!loading && (
                <View style = {styles.adoptView}>
                    <TouchableOpacity
                      onPress = {() => {
                        if(adopt)
                          navigate('認養申請', {id: dogInfo.id});
                        else
                          navigate('洗狗');
                      }}
                      style = {styles.adoptButton}
                    >
                      <Text style = {{fontSize: 20, color: '#ffffff'}}>
                        {text}
                      </Text>
                    </TouchableOpacity>
                </View>
              )}

          </View>
        );
    }
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center'
  },
  titleText: {
    fontSize: (Platform.OS === 'ios') ? 25 : 27,
    color: '#7B2D86'
  },
  spot: {
      color: '#7B2D86'
  },
  story: {
    color: '#7B2D86'
  },
  thumbContainer: {
      flex: 1,
      alignItems: 'center'
  },
  thumb: {
    width: width*0.8,
    height: (width*0.8*0.67)
  },
  galleryRow:{
    flex: 1,
    flexDirection: 'row'
  },
  galleryItem: {
      width: width*0.8*0.33,
      height: (width*0.8*0.67)*0.33,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5
  },
  adoptView: {
      position: 'absolute',
      bottom: 0,
      width: width*0.95,
      height: 50
  },
  adoptButton: {
      width: width*0.95,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#67297A'
  }
});

export default connect(state => ({
    loading: state.eachdog.loading,
    dogInfo: state.eachdog.dogInfo,
}))(Each);
