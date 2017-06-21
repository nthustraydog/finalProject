import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react'
import {  TouchableOpacity } from 'react-native'

import HideableView from 'react-native-hideable-view';
import NavHeader from './NavHeader';

import {
    Text,
    View,
    AppRegistry,
    ListView,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
//import InfiniteScrollView from 'react-native-infinite-scroll-View';

import {Content} from 'native-base';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';


class ActivityScreen extends React.Component {
    toggle() {
        this.setState({
          visible: !this.state.visible
        });
    }
    static propTypes = {
        navigation: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            q1: false,
            q2: true,
            q3: false,
            q4: false
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <NavHeader navigate={navigate} goBack={goBack} title='活動資訊'>
              <ScrollView>
                  <View style={styles.ActivityFrame}>

                    <View style={[styles.listItem, {backgroundColor:'#C10066', paddingBottom: (this.state.q1) ? 10 : 0}]}>
                      <Text style={styles.activityTitle} onPress={() => {
                            this.setState({
                                q1: !this.state.q1
                            });
                        }}>
                         認養大會 07/26(六)
                       </Text>
                       <HideableView visible={this.state.q1} style={{
                           height:this.state.q1? null : 0
                         }}>
                          <View style={styles.activityContentTitle}>
                           <Text style={{color:'black'}}>
                            Ａ：學校裡的每一隻狗都可以認養。清大也有同學因為跟狗狗感情很好，而將校園裡面的狗狗認養回家。只要經過懷生社評估，確定居家環境及家庭都適合養狗，同時你也有一顆對狗狗不離不棄的心，就可以簽署認養同意書喔！我們也鼓勵同學們把狗狗認養回家，給他們一個溫暖的家。
                           </Text>
                         </View>
                       </HideableView>
                    </View>

                    <View style={[styles.listItem, {backgroundColor:'#7744FF', paddingBottom: (this.state.q2) ? 10 : 0}]}>
                      <Text style={styles.activityTitle} onPress={() => {
                            this.setState({
                                q2: !this.state.q2
                            });
                        }}>
                         洗狗大會 08/10(日)
                       </Text>
                       <HideableView visible={this.state.q2} style={{
                           height:this.state.q2? null : 0
                         }}>
                          <View style={styles.activityContentTitle}>
                           <Text style={{color:'black'}}>
                             【活動資訊】：{'\n'}
                             時間：08/10（日） 上午10：00{'\n'}
                             集合地點：於小吃部前面的野台集合{'\n'}
                             活動地點：水木頂樓{'\n'}
                             注意事項：建議穿著輕便服裝和脫鞋
                           </Text>
                         </View>
                       </HideableView>
                    </View>

                    <View style={[styles.listItem, {backgroundColor:'#668800', paddingBottom: (this.state.q3) ? 10 : 0}]}>
                      <Text style={styles.activityTitle} onPress={() => {
                            this.setState({
                                q3: !this.state.q3
                            });
                        }}>
                         懷生講座 09/5(四)
                       </Text>
                       <HideableView visible={this.state.q3} style={{
                           height:this.state.q3? null : 0
                         }}>
                          <View style={styles.activityContentTitle}>
                           <Text style={{color:'black'}}>
                             A：當您撿到這些野生動物，懷生社只能提供動物醫院的地址，其餘的部分則無法提供協助喔！除此之外，未具有相關知識，請勿隨意撿未受傷或還是幼體的野生動物，沾染人類味道的幼體可能遭媽媽遺棄，也可能使自己受傷！
                           </Text>
                         </View>
                       </HideableView>
                    </View>

                    <View style={[styles.listItem, {backgroundColor:'#FF5511', paddingBottom: (this.state.q4) ? 10 : 0}]}>
                      <Text style={styles.activityTitle} onPress={() => {
                            this.setState({
                                q4: !this.state.q4
                            });
                        }}>
                          竹蜻蜓綠市集 10/8(六)
                       </Text>
                       <HideableView visible={this.state.q4} style={{
                           height:this.state.q4? null : 0
                         }}>
                          <View style={styles.activityContentTitle}>
                           <Text style={{color:'black'}}>
                             Ａ：當狗狗亂上車的時候，只要輕拉牠的項圈，或是用食物引誘牠下車即可。
                           </Text>
                         </View>
                       </HideableView>
                    </View>
                </View>
              </ScrollView>
            </NavHeader>
        );
    }
}

const styles = StyleSheet.create({
    ActivityFrame: {
      justifyContent: 'center',
      flex: 1,flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'white',
      paddingLeft: width*0.1,
      paddingRight: width*0.1,

    },
    listItem: {
      width:360,
      alignItems:'center',
      marginTop: 10,
      marginBottom: 20,
    },
    activityTitle: {
      color:'white',
      fontSize:20
    },
    activityContentTitle: {
      width:354,
      backgroundColor:'white'
    },

});

export default connect(state => ({

}))(ActivityScreen);
