import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {TextInput , StyleSheet , ScrollView, Keyboard} from 'react-native';
import {Icon} from 'native-base';
import NavHeader from './NavHeader';

import {Content,Input} from 'native-base';
import CheckBox from 'react-native-checkbox';
import {connect} from 'react-redux';
import Button from 'apsl-react-native-button'
import Popup from 'react-native-popup';
import { sendevent as sendeventFromApi } from '../api/dog';
export default class EventScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,

    };

    constructor(props) {
        super(props);
        this.state = {
          name_in: '',
          email_in:'',
          date_in:'',
          location_in:'',
          dogname_in:'',
          process_in:'',
          check_event:'',
          check_car: false,
          check_bite: false,
          check_hurt: false,
          check_other: false
        };
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        const {navigate, goBack} = this.props.navigation;
        return (
            <NavHeader navigate = {navigate} goBack = {goBack} title = {"事件通報"}>
                <View style={{flex: 1,}}>

                <ScrollView>
                {/*基本資料*/}
                    <View style={{borderWidth: 2 , alignSelf: 'flex-start' , borderColor: 'rgb(31, 108, 223)',margin: 20 }}>
                    <Text style={{color:'rgb(31, 108, 223)' ,fontSize: 20 , padding: 7}}>通報人基本資料</Text>
                    </View>
                    <View style={{marginLeft:40}}>
                    <View style={{flexWrap: 'wrap',flexDirection:'row', margin:10}}>
                    <Text style={{fontSize:17 , marginTop:5,color:'black'}}>姓名:</Text>
                    <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}}
                      onChangeText={(name_in) => this.setState({name_in})}
                      value={this.state.name_in}/>
                    </View>
                    <View style={{flexWrap: 'wrap',flexDirection:'row', margin:10}}>
                    <Text style={{fontSize:17 , marginTop:5 , color:'black'}}>Email:</Text>
                    <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}}
                      onChangeText={(email_in) => this.setState({email_in})}
                      value={this.state.email_in}/>
                    </View>
                    </View>
                  {/*事件詳細內容*/}
                  <View style={{borderWidth: 2 , alignSelf: 'flex-start' , borderColor: 'rgb(31, 108, 223)',margin: 20 }}>
                  <Text style={{color:'rgb(31, 108, 223)' ,fontSize: 20 , padding: 7}}>事件詳細內容</Text>
                  </View>
                  <View style={{marginLeft:50}}>
                    <Text style={{color:'black' , fontSize: 17}}>事件種類:</Text>
                      <View style={{margin:20}}>
                      <CheckBox label='狗狗追車、追人' checked={this.state.check_car} onChange={() =>this.handleCheckBox('car') }></CheckBox>
                      <CheckBox label='被狗狗咬傷' checked={this.state.check_bite} onChange={() =>this.handleCheckBox('bite') }></CheckBox>
                      <CheckBox label='發現新犬、傷病犬' checked={this.state.check_hurt} onChange={() =>this.handleCheckBox('hurt') }></CheckBox>
                      <CheckBox label='其他' checked={this.state.check_other} onChange={() =>this.handleCheckBox('other') }></CheckBox>
                      </View>
                      <View style={{flexWrap: 'wrap',flexDirection:'row'}}>
                      <Text style={{fontSize:17 , marginTop:5,color:'black'}}>時間:</Text>
                      <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:17}}
                        onChangeText={(date_in) => this.setState({date_in})} placeholder="請盡量估測發生時間"
                        value={this.state.date_in}/>
                      </View>

                      <View style={{flexWrap: 'wrap',flexDirection:'row'}}>

                      <Text style={{fontSize:17 , marginTop:5,color:'black'}}>地點:</Text>
                      <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}}
                        onChangeText={(location_in) => this.setState({location_in})}
                        value={this.state.location_in}/>
                      </View>
                      <View style={{flexWrap: 'wrap',flexDirection:'row'}}>
                      <Text style={{fontSize:17 , marginTop:5,color:'black'}}>犬隻姓名或特徵:</Text>

                      <TextInput style={{height:40, width:200, borderColor: 'gray', fontSize:20}}
                        onChangeText={(dogname_in) => this.setState({dogname_in})}
                        value={this.state.dogname_in}/>
                      </View>
                      <Text  style={{fontSize:17 , marginTop:5,color:'black'}}>詳細過程：</Text>
                      <TextInput style={{height:200, width:250, borderColor: 'gray', fontSize:17 , borderWidth:3}} editable = {true}
                        maxLength = {30} multiline = {true} onChangeText={(process_in) => this.setState({process_in})}
                        value={this.state.process_in} ></TextInput>
                  </View>

                  </ScrollView>

                  <Button style={{backgroundColor: 'yellow'}} textStyle={{fontSize: 18}} onPress={this.handleSubmit}>
                      <Icon name='email' style={{margin:'auto'}}>通報</Icon>
                  </Button>
                    <Popup ref={popup => this.popup = popup }/>
              </View>
            </NavHeader>
        );
    }



    handleCheckBox(thing){
      switch (thing) {
        case 'car':
        this.setState({
          check_car: !this.state.check_car,
          check_event: '狗狗追車、追人'
        })
          break;
        case 'bite':
        this.setState({
          check_bite: !this.state.check_bite,
          check_event: '被狗狗咬傷'
        })
          break;
        case 'hurt':
        this.setState({
          check_hurt: !this.state.check_hurt,
          check_event: '發現新犬、傷病犬'
        })
        break;
        case 'other':
        this.setState({
          check_other: !this.state.check_other,
          check_event: '其他'
        })
        break;

        default:
      }
    }

    handleSubmit(e){
      Keyboard.dismiss()
      console.log(this.state.name_in);
      console.log(this.state.email_in);
      console.log(this.state.location_in);
      console.log(this.state.date_in);
      console.log(this.state.dogname_in);
      console.log(this.state.process_in);

      sendeventFromApi(this.state.name_in,this.state.email_in,this.state.date_in,this.state.location_in,this.state.dogname_in,this.state.process_in,this.state.check_event);
      this.popup.alert("謝謝您的通報，我們會盡快處理");
      this.setState({
        name_in: '',
        email_in:'',
        date_in:'',
        location_in:'',
        dogname_in:'',
        process_in:'',
        check_event:'',
        check_car: false,
        check_bite: false,
        check_hurt: false,
        check_other: false
      })
    }
}


const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor:'white',
justifyContent: 'center',
paddingHorizontal: 20,
paddingVertical: 5,
},
});
