import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react'
import {  TouchableOpacity } from 'react-native'

import HideableView from 'react-native-hideable-view';
//import styles from './app.style';

import {
    Text,
    View,
    ListView,
    ScrollView,
    Dimensions
} from 'react-native';
//import InfiniteScrollView from 'react-native-infinite-scroll-View';

import {Content} from 'native-base';
import NavHeader from './NavHeader';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');


class QuestionScreen extends React.Component {
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
            visible: false
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
        <NavHeader navigate={navigate} goBack={goBack} title='常見Q＆A'>
          <ScrollView>
      <View style={{justifyContent: 'center',flex: 1,flexDirection: 'column',alignItems: 'center',backgroundColor:'white', paddingLeft: width*0.1, paddingRight: width*0.1}}>

         <View >
           <View>
             <Text>{'\n'}</Text>

           </View>
        <Text style={{fontSize:28,color:'purple'}}>常見Ｑ＆Ａ</Text>
        <View>
          <Text>{'\n'}</Text>

        </View>
       <View>
          <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
              this.setState({
              q1:!this.state.q1
          })}> Ｑ1：我很喜歡學校的狗，我可以帶他們回家嗎？</Text>
          <HideableView visible={this.state.q1} style={{height:this.state.q1?null:0}}>
               <Text style={{fontSize:18,color:'black'}}>
                Ａ：學校裡的每一隻狗都可以認養。清大也有同學因為跟狗狗感情很好，而將校園裡面的狗狗認養回家。只要經過懷生社評估，確定居家環境及家庭都適合養狗，同時你也有一顆對狗狗不離不棄的心，就可以簽署認養同意書喔！我們也鼓勵同學們把狗狗認養回家，給他們一個溫暖的家。
              </Text>
          </HideableView>

      </View>

      <View>
        <Text>{'\n'}</Text>

      </View>

      <View>
         <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
             this.setState({
             q2:!this.state.q2
         })}> Ｑ2：在學校周遭撿到傷犬／幼犬，可以請懷生社幫忙嗎？</Text>
         <HideableView visible={this.state.q2} style={{height:this.state.q2?null:0}}>
              <Text style={{fontSize:18,color:'black'}}>
               Ａ：懷生社的人力、資金都有限，無法照顧校園範圍以外的犬貓。我們只能從旁提供口頭上的指導、或是幫忙轉貼認養文等，無法收編狗狗、或是提供寄宿喔！
             </Text>
         </HideableView>
     </View>

     <View>
       <Text>{'\n'}</Text>

     </View>

     <View>
        <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
            this.setState({
            q3:!this.state.q3
        })}> Ｑ3：撿到松鼠／鴿子／烏龜……懷生社可以幫忙嗎？</Text>
        <HideableView visible={this.state.q3} style={{height:this.state.q3?null:0}}>
             <Text style={{fontSize:18,color:'black'}}>
              A：當您撿到這些野生動物，懷生社只能提供動物醫院的地址，其餘的部分則無法提供協助喔！除此之外，未具有相關知識，請勿隨意撿未受傷或還是幼體的野生動物，沾染人類味道的幼體可能遭媽媽遺棄，也可能使自己受傷！
            </Text>
        </HideableView>
    </View>

    <View>
      <Text>{'\n'}</Text>

    </View>

    <View>
       <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
           this.setState({
           q4:!this.state.q4
       })}> Ｑ4：有狗狗自動坐上我的機車怎麼辦？</Text>
       <HideableView visible={this.state.q4} style={{height:this.state.q4?null:0}}>
            <Text style={{fontSize:18,color:'black'}}>
             Ａ：當狗狗亂上車的時候，只要輕拉牠的項圈，或是用食物引誘牠下車即可。
           </Text>
       </HideableView>
   </View>

   <View>
     <Text>{'\n'}</Text>

   </View>

   <View>
      <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
          this.setState({
          q5:!this.state.q5
      })}> Ｑ5：有狗狗躺在我的包包上怎麼辦？</Text>
      <HideableView visible={this.state.q5} style={{height:this.state.q5?null:0}}>
           <Text style={{fontSize:18,color:'black'}}>
            Ａ：當狗狗躺在您的物品上時，可以用食物引誘其離開，手邊沒有食物的話可以摩擦塑膠袋假意餵食。或是也可以用雨傘阻隔與狗狗的視線，再趁機把物品移開。
          </Text>
      </HideableView>
  </View>

  <View>
    <Text>{'\n'}</Text>

  </View>

  <View>
     <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
         this.setState({
         q6:!this.state.q6
     })}> Ｑ6：懷生社需要經費或物資嗎？</Text>
     <HideableView visible={this.state.q6} style={{height:this.state.q6?null:0}}>
          <Text style={{fontSize:18,color:'black'}}>
           Ａ：我們照顧狗狗的費用，部分由學校補助，部分透過募款的方式募得足夠款項。狗狗的醫療、照顧費十分龐大，我們也歡迎各界捐款，一起幫忙這群狗狗。如果您有多餘的被單、舊衣服、飼料、運輸籠、狗狗用品……等，都可以捐給我們喔！
         </Text>
     </HideableView>
 </View>
 <View>
   <Text>{'\n'}</Text>

 </View>
 <Text style={{fontSize:28,color:'purple'}}>校浪Ｑ＆Ａ</Text>
 <View>
   <Text>{'\n'}</Text>

 </View>
 <View>
    <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
        this.setState({
        q7:!this.state.q7
    })}> Ｑ7：化工館的吊吊為什麼沒有毛？牠的前腳是不是受傷了？</Text>
    <HideableView visible={this.state.q7} style={{height:this.state.q7?null:0}}>
         <Text style={{fontSize:18,color:'black'}}>
          Ａ：吊吊的皮膚狀況差是因為對跳蚤過敏，此過敏無法根治，只能靠降低被跳蚤叮咬來阻止過敏的發生，不過吊吊並不親人，我們很難幫他除蚤，長期下來，不斷地過敏，毛髮便有脫落的狀況。而吊吊的腳，多年前初次發現他時，就已經是彎曲的樣子了。當時我們有帶他去看過醫生，醫生說骨折處已長出結締組織包覆，幸運的是「並不影響生活」！也就是說，只要吊吊看起來精神狀況不錯，大致上都不必太擔心喔！
         </Text>
    </HideableView>
</View>

<View>
  <Text>{'\n'}</Text>

</View>

<View>
   <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
       this.setState({
       q8:!this.state.q8
   })}> Ｑ8：巧虎、皮蛋與來來，走路怎麼有點怪怪的？</Text>
   <HideableView visible={this.state.q8} style={{height:this.state.q8?null:0}}>
        <Text style={{fontSize:18,color:'black'}}>
         Ａ：巧虎跟皮蛋的腳之前因為骨折動過手術，所以走起路來會有點怪怪的，只要他們不會痛就沒有太大的問題。來來的腳初次發現他時就已經是那樣了，不確定原因，但是對他現在的生活沒有太大影響，大家不用特別擔心喔！
        </Text>
   </HideableView>
</View>

<View>
  <Text>{'\n'}</Text>

</View>

<View>
   <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
       this.setState({
       q9:!this.state.q9
   })}> Ｑ9：我看到丁丁倒在地上不斷抽蓄，我該怎麼幫她？</Text>
   <HideableView visible={this.state.q9} style={{height:this.state.q9?null:0}}>
        <Text style={{fontSize:18,color:'black'}}>
         Ａ：丁丁以前得過犬瘟，留下了後遺症，有時候會突然倒地抽蓄、口吐白沫、大小便失禁，可以在現場觀察一下，等她發作完確認沒事即可，也可以通報社團，讓我們了解一下丁丁的狀況。
        </Text>
   </HideableView>
</View>

<View>
  <Text>{'\n'}</Text>

</View>

<View>
   <Text style={{fontSize:18,color:'#C10066'}} onPress={()=>
       this.setState({
       q10:!this.state.q10
   })}> Ｑ10：小豬的尾巴為什麼沒有毛？</Text>
   <HideableView visible={this.state.q10} style={{height:this.state.q10?null:0}}>
        <Text style={{fontSize:18,color:'black'}}>
         Ａ：小豬的尾巴是甲狀腺素低落造成的禿毛現象，她還有腎結石的問題，大家可以多餵她喝水喔！
        </Text>
   </HideableView>
</View>

    </View>

    </View>
      </ScrollView>
    </NavHeader>
        );
    }
}

export default connect(state => ({

}))(QuestionScreen);
