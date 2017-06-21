import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Animated,
  Easing,
  View,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  StyleSheet,
  Dimensions,
  Keyboard
} from 'react-native';
import Popup from 'react-native-popup';

import {sendadopt as sendadoptFromApi} from '../api/dog';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const initialState = {
    id: '',
    idDanger: false,
    name: '',
    nameDanger: false,
    phone: '',
    phoneDanger: false,
    email: '',
    emailDanger: false,
    address: '',
    addressDanger: false,
    exp: '',
    expDanger: false
};

export default class AdoptApply extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        this.onSubmitEdit = this.onSubmitEdit.bind(this);
    }
    componentDidMount() {
        const {params} = this.props.navigation.state;

        if(params) {
            this.setState({
                id: params.id
            });
        }
    }
    render() {

      return (
        <View style = {{
              paddingBottom: 50,
          }}>
          <Image source = {require('../images/adoptBackground.jpg')} style = {{
              position: 'absolute',
              resizeMode: 'cover'
            }}>
              <View style = {{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: width,
                  height: height,
                  backgroundColor: 'rgba(255,255,255,0.6)'
                }}>
              </View>
          </Image>
          <ScrollView keyboardShouldPersistTaps = {'never'}>
              <View style = {styles.titleContainer}>
                <Text style = {styles.applyTitle}>--認養申請表--</Text>
              </View>
              <View style = {{
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  width: width*0.9,
                  alignSelf: 'center'
                }}>
                <Text style = {styles.textInput}>欲認養犬隻：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 40,
                    borderColor: this.state.idDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(id) => this.setState({id})}
                  value={this.state.id}
                  placeholder = {"欲認養犬隻"}
                />

                <Text style = {styles.textInput}>姓名：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 40,
                    borderColor: this.state.nameDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(name) => this.setState({name})}
                  value={this.state.name}
                  placeholder = {"您的名字"}
                />

                <Text style = {styles.textInput}>電話號碼：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 40,
                    borderColor: this.state.phoneDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(phone) => this.setState({phone})}
                  value={this.state.phone}
                  placeholder = {"電話號碼"}
                />

                <Text style = {styles.textInput}>電子信箱(email)：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 40,
                    borderColor: this.state.emailDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  placeholder = {"電子信箱"}
                />

                <Text style = {styles.textInput}>住家縣市：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 40,
                    borderColor: this.state.addressDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(address) => this.setState({address})}
                  value={this.state.address}
                  placeholder = {"新竹市"}
                />

                <Text style = {styles.textInput}>經驗：</Text>
                <TextInput
                  style={{
                    width: width*0.75,
                    height: 100,
                    borderColor: this.state.expDanger? 'red' : 'gray',
                    borderWidth: 1,
                    alignSelf: 'center',
                  }}
                  onChangeText={(exp) => this.setState({exp})}
                  value={this.state.exp}
                  placeholder = {"是否養過狗？有的話請簡述背景"}

                />

                <Text>{'\n'}</Text>
              </View>
          </ScrollView>

          <TouchableOpacity onPress = {this.onSubmitEdit} style = {styles.submitButton}>
            <Text style = {{
                fontSize: 19,
                fontWeight: 'bold'
              }}>
              提交
          </Text>
          </TouchableOpacity>
          <Popup ref={popup => this.popup = popup }/>
        </View>
      );
    }

    onSubmitEdit(e) {
        Keyboard.dismiss(); //mmake keyboard dismiss when pushing Button
        const {id, name, phone, email, address, exp} = this.state;
        const {navigate, goBack} = this.props.navigation;

        if(id === '') {
            this.setState({
                idDanger: true
            });
            return;
        }
        if(name === '') {
            this.setState({
                idDanger: false,
                nameDanger: true
            });
            return;
        }
        else if(phone === '') {
            this.setState({
                nameDanger: false,
                phoneDanger: true
            });
            return;
        }
        else if(email === '') {
            this.setState({
                phoneDanger: false,
                emailDanger: true
            });
            return;
        }
        else if(address === '') {
            this.setState({
                emailDanger: false,
                addressDanger: true
            });
            return;
        }
        else if(exp === '') {
            this.setState({
                addressDanger: false,
                expDanger: true
            });
            return;
        }
        else {

            this.popup.alert("認養申請成功");
            console.log(id);
            console.log(name);
            console.log(phone);
            console.log(email);
            console.log(address);
            console.log(exp);

            sendadoptFromApi(name, phone, email, address, exp, id);
            this.setState({
                ...initialState
            });
        }
    }
}

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center'
    },
    applyTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        marginLeft: width*0.075,
        marginTop: 10,
        marginBottom: 10
    },
    submitButton: {
      width: width,
      height: 50,
      backgroundColor: 'rgba(148, 204, 102, 1)',
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
      borderColor: 'black',
      borderWidth: 2
    },
});
