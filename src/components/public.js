import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {TextInput, StyleSheet , ScrollView , Picker , Image , Linking , TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import NavHeader from './NavHeader';
import {Content,Input} from 'native-base';
import {connect} from 'react-redux';

class PublicScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {

    };

    }

    render() {
      const {navigate, goBack} = this.props.navigation;
      return (


      <NavHeader navigate={navigate} goBack={goBack} title='重要宣導'>
        <ScrollView>
        <View>
        <View style={{backgroundColor:'rgb(55, 152, 232)', margin:20}}>
        <Text style={{color:'white' , fontSize:27}}>  不可在餐廳與室內餵食</Text>
        </View>
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'black'}}>
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'red'}}>
          清大校園內，是禁止在餐廳、室內餵食狗狗的喔！
        </Text>
        若是在餐廳或任何系館、宿舍等室內餵食狗狗，
        將使狗狗養成在這些地方逗留乞食的壞習慣，也可能使牠們為了爭奪食物源而吵架，
        造成不喜歡狗狗的朋友們的困擾。此外，狗狗的腎臟較小，
        人類的食物過油過鹹，對狗狗的身體是非常大的負擔，
        狗狗無法分辨什麼食物對自身有害，這點還要讓我們人類來為牠們的健康把關囉！
        </Text>

        <View style={{backgroundColor:'rgb(18, 147, 240)', margin:20}}>
        <Text style={{color:'white' , fontSize:27}}>  不可以餵狗吃骨頭！！！</Text>
        </View>
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'black'}}>
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'red'}}>
          千萬不要給狗狗吃骨頭喔！無論是雞骨、豬骨、牛骨都不可以！
        </Text>
        雖然在我們從小到大的觀念裡，狗就是要吃骨頭的，
        然而事實上吃骨頭可能會刺穿體內的器官而造成大出血，
        或是卡在腸道造成下痢或排便困難，很多狗狗就是因為吃了骨頭而一命嗚呼！{"\n"}{"\n"}
        </Text>

        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'black'}}>
          除了骨頭以外，
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'red'}}>
          狗狗的飲食禁忌還有巧克力、咖啡、葡萄、洋蔥、大蒜、木醣醇（糖果）、果核、牛奶等。
        </Text>
        人類的食物因為重鹹重油，對狗狗的身體負擔很大
        （常駐小吃部附近的校浪有好幾隻腎指數都超標），
        若是想要餵狗狗吃東西，可以去便利商店買罐頭喔！
        他們會很愛你的！
        </Text>

        <View style={{backgroundColor:'rgb(31, 125, 250)', margin:20}}>
        <Text style={{color:'white' , fontSize:27}}>  狗狗的肢體語言與安定訊號</Text>
        </View>
        <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'black'}}>
          遇見狗的時候，雖然會想要跟牠接觸，
          但有的時候如果方法弄錯了，
          可能會使狗狗感到焦慮。安定訊號就相當於狗狗之間通用的肢體語言，
          如果學會了安定訊號，就可以知道如何適當的安撫狗狗的情緒。{"\n"}{"\n"}
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL('http://my.nthu.edu.tw/~srv9215/carelife2013/4-1calmingsignals.htm')}>
          <Text style={{marginLeft:20 , marginRight:20 , fontSize:17 , color:'red'}}>
            想知道更多關於安定訊號的知識：
          <Text style={{color: 'blue' , fontWeight: "bold" , fontSize:20}}>
          點我前往 {"\n"}{"\n"}
          </Text>
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      </NavHeader>
    );
    }

  }



export default connect(state => ({
}))(PublicScreen);
