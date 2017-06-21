import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {TextInput, StyleSheet , ScrollView , Picker , Image} from 'react-native';
import {Icon} from 'native-base';
// var { Icon, } = require('react-native-icons');
import {Content,Input} from 'native-base';
import Popup from 'react-native-popup';
import CheckBox from 'react-native-checkbox';
import {connect} from 'react-redux';
import Button from 'apsl-react-native-button'
import { sendbath as sendbathFromApi } from '../api/dog';
import DatePicker from 'react-native-datepicker'
import NavHeader from './NavHeader';
export default class BathScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,

    };

    constructor(props) {
        super(props);
        this.state = {
          bath_name:'',
          bath_mail:'',
          bath_date:'',
          dog_choose:'',
          note:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
          <NavHeader navigate={navigate} goBack={goBack} title='成就簿'>
            <View style={{flex: 1}}>
                <ScrollView>
              <Image source={require('../images/plus.png')} style={styles.header}>

                  <View style={{marginLeft:90}}>
                <Text style={{fontSize:30 , marginTop:20 , color:'black'}}>洗澡の美好時光</Text>
                <Text style={{marginLeft:10 , marginTop:10, color:'black'}}> 走在校園裡摸了可愛的校浪{"\n"}但看看自己的手覺得又髒又臭？{"\n"}
                  要不要撥空幫浪浪們洗個澡呢？{"\n"}只需要填完以下表單就能預約囉！{"\n"}</Text>
                  <View style={{flexWrap: 'wrap',flexDirection:'row' , marginTop:20}}>
                  <Text style={{fontSize:17 , marginTop:5,color:'black'}}>暱稱:</Text>
                  <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}} onChangeText={(bath_name) => this.setState({bath_name})}
                  value={this.state.bath_name}/>
                  </View>
                  <View style={{flexWrap: 'wrap',flexDirection:'row' , marginTop:20}}>
                    <Text style={{fontSize:17 , marginTop:5,color:'black'}}>信箱:</Text>
                    <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}} onChangeText={(bath_mail) => this.setState({bath_mail})}
                    value={this.state.bath_mail}/>
                  </View>
                  <View style={{flexWrap: 'wrap',flexDirection:'row' , marginTop:20}}>
                    <Text style={{fontSize:17 , marginTop:5,color:'black'}}>時間: </Text>
                  <DatePicker
                     style={{width: 200}}
                     date={this.state.bath_date}
                     mode="datetime"
                     format="YYYY-MM-DD HH:mm"
                     confirmBtnText="Confirm"
                     cancelBtnText="Cancel"
                     customStyles={{
                       dateIcon: {
                         position: 'absolute',
                         left: 0,
                         top: 4,
                         marginLeft: 0
                       },
                       dateInput: {
                         marginLeft: 36
                       }
                     }}
                     minuteInterval={10}
                     onDateChange={(bath_date) => {this.setState({bath_date: bath_date});}}
                   />
                 </View>
                   <Text style={{fontSize:17 , marginTop:15,color:'black'}}>                     選愛寵:<Icon name='nature'></Icon></Text>
                     <Picker
                      selectedValue={this.state.dog_choose}
                      onValueChange={(itemValue, itemIndex) => this.setState({dog_choose: itemValue})}
                      prompt="挑一隻自己喜歡的吧！">
                      <Picker.Item label="小丸子" value="小丸子"/>
                      <Picker.Item label="斑斑" value="斑斑" />
                      <Picker.Item label="阿醜" value="阿醜" />
                      <Picker.Item label="阿幹" value="阿幹" />
                      <Picker.Item label="憨吉" value="憨吉" />
                    </Picker>

                    <Text  style={{fontSize:17 , marginTop:5,color:'black'}}>備註:</Text>
                    <TextInput style={{height:180, width:250, borderColor: 'gray', fontSize:17 , borderWidth:3}} editable = {true}
                      maxLength = {30} multiline = {true} onChangeText={(note) => this.setState({note})}
                      value={this.state.note} ></TextInput>
                    </View>


              <Button style={{backgroundColor: 'yellow'}} textStyle={{fontSize: 18}} onPress={this.handleSubmit}>
                <Icon name='archive' style={{margin:'auto'}}>預約囉！</Icon>
              </Button>
              <Popup ref={popup => this.popup = popup }/>
            </Image>
                  </ScrollView>

            </View>
          </NavHeader>
        );
    }


    handleSubmit(e){
      this.popup.alert("預約成功～～");
      console.log(this.state.bath_name);
      console.log(this.state.bath_mail);
      console.log(this.state.bath_date);
      console.log(this.state.dog_choose);
      console.log(this.state.note);
      this.setState({
        bath_name:'',
        bath_mail:'',
        bath_date:'',
        dog_choose:'',
        note:''
      })
      sendbathFromApi(this.state.bath_name,this.state.bath_mail,this.state.bath_date,this.state.dog_choose,this.state.note);
    }
}

const styles = {
    header: {
        width: undefined,
        height: 660,
        justifyContent: 'center',
        resizeMode: 'cover'
    }
};
