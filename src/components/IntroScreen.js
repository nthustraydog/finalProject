import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react'
import {  TouchableOpacity } from 'react-native'

import {
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Dimensions
} from 'react-native';

import {Content} from 'native-base';
import {connect} from 'react-redux';
import NavHeader from './NavHeader';

const {height, width} = Dimensions.get('window');

class IntroScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        
        return (
          <NavHeader navigate = {navigate} goBack = {goBack} title = {"社團簡介"}>
            <ScrollView>
      			<View style={{justifyContent: 'center',flex: 1,flexDirection: 'column',alignItems: 'center',backgroundColor:'white', paddingLeft: width*0.1, paddingRight: width*0.1}}>


                <View >
                <Image  style={styles.header} source={require('../images/introPicture.jpg')}/>


                <Text>

      					<Text style={{fontSize:28,color:'purple'}}>懷生社簡介 </Text>
                {'\n'}
      				  <Text style={{color:'black'}}>     平常照顧校園狗狗的為「關懷生命社」，簡稱「懷生社」，懷生社由一群支持動保理念，實踐「結紮代替撲殺」的學生組成，我們與清大校方合作，一同努力創造尊重生命的友善校園。</Text>
                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>以下簡單介紹懷生社平時的工作:</Text>
                {'\n'}
                {'\n'}

      					<Text style={{backgroundColor:'lightblue',fontSize:20,color:'black'}}>校內犬隻TNVR</Text>

                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     清大懷生社透過「 </Text>
                <Text style={{color:'purple'}}>T.N.V.R</Text>
                  <Text style={{color:'black'}}>」：捕捉 (Trap)、結紮 (Neuter)、打疫苗(Vaccinate)、回置 (Return)的方式，期待有效減少流浪動物的數量，同時保障流浪狗的基本生存權，不以送入收容所為處理方式。懷生社將出現於校園的流浪犬捕捉並結紮，抑制其無止盡地繁殖，並且回置於原處，同時加以訓練，讓狗狗的行為符合與人類共處的標準。</Text>


                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     目前校內所有的流浪犬都已經結紮，沒有發情或是生產的問題，也能降低他們因爭取交配權而產生攻擊的行為。懷生社近年來也努力結紮校園周邊的狗，讓流浪狗的數目不要增多。
      					</Text>
                {'\n'}
                {'\n'}
      					<Text style={{backgroundColor:'lightblue',fontSize:20,color:'black'}}>校內犬隻送養</Text>
                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     校園內會出現流浪犬，多半是人類棄養，或是校外沒結紮的母狗跑進校內生小狗。當幼犬被通報時，懷生社會視人力狀況，盡量照顧這些幼犬，並且進行送養。以 101-102 年為例，懷生社就幫近 30 隻的狗狗找到認養家庭。另外，校園內看到的狗，都是可以認養的，尤其有的狗狗已經年老，需要一個家安養天年，或是有的狗狗還很年輕，我們都希望能有人認養牠們。如果你跟某隻狗狗感情很好，有心想要照顧牠一輩子，只要經過懷生社評估，確定居家環境、家庭的狀況適合狗狗，就可以簽署認養同意書把狗狗帶回家喔！
      					</Text>
                {'\n'}
                {'\n'}
      					<Text style={{backgroundColor:'lightblue',fontSize:20,color:'black'}}>校內犬隻照護</Text>
                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     校園內的流浪狗皆有定期施打狂犬病及七合一等疫苗，並於每個月初實行犬心絲蟲等餵藥及除蚤，每一隻狗都有屬於自己的健康手冊，由懷生社員不定期帶至動物醫院健康檢查，若接獲任何傷病犬通報也會即時帶往醫療。

      					為使狗狗不會因為飢餓而搶食、翻廚餘，目前學校開設一門「校園關懷流浪犬」服務學習課程，修課同學會餵食校內犬隻，並且觀察狗狗的身體狀況，使校內流浪犬不至於飢餓而互相爭食，又能夠為了維護資源驅趕外來流浪狗。此外，在每個學期期初與期末皆會舉辦洗狗大會，讓全校師生共襄盛舉，一起維護狗狗的清潔、親近牠們。
      					</Text>
                {'\n'}
                {'\n'}
      					<Text style={{backgroundColor:'lightblue',fontSize:20,color:'black'}}>生命教育宣導</Text>
                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     為了讓師生們有機會更加了解狗狗，懷生社經常舉辦各式主題的演講，像是導盲犬知識演講、獸醫師演講、動保人士演講…等。我們也在每次懷生週時張貼各種宣傳海報，所有的資訊都會公佈在「清華大學關懷生命社粉絲專頁」上，歡迎每個想要靠近狗狗的人參加喔！
      					</Text>
                {'\n'}
                {'\n'}
      					<Text style={{backgroundColor:'lightblue',fontSize:20,color:'black'}}>事件通報處理</Text>
                {'\n'}
                {'\n'}
      					<Text style={{color:'black'}}>     狗狗和人生活在同一個空間中，有時會遇到問題，當校內師生與狗狗發生衝突，通報給懷生社，我們會協助處理。懷生社員平時與狗相處，大多了解校內狗狗的特性與習慣，因此我們會評估狀況並做出緊急處理。若是遇到狗狗因各種原因受傷，也可通知懷生社將其送醫或實行簡單包紮。
      					</Text>

                </Text>
              </View>

          		</View>
            </ScrollView>
          </NavHeader>
        );
    }
}

const styles = {
    drawer: {
        flex: 1,
        backgroundColor: appColors.primaryLight
    },
    header: {
        width: undefined,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
        marginBottom: 16
    },
    item: {
        alignItems: 'center'
    },
    icon: {
        color: appColors.primaryLightText
    },
    text: {
        color: appColors.primaryLightText,
        //fontSize: (Platform.OS === 'ios') ? 17 : 19,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 12
    }
};
export default connect(state => ({

}))(IntroScreen);
