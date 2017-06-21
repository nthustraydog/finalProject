import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {
    Container,
    Header,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Grid,
    Col,
    Title,
    Drawer
} from 'native-base';

const {width, height} = Dimensions.get('window');

class NavHeader extends React.Component {
    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    render() {
        const {title, navigate, goBack} = this.props;
        return (
            <Drawer
                ref={(el) => {this.drawer = el}}
                content={
                  <View style = {{backgroundColor: 'white', height: height}}>
                      <Text>123</Text>
                  </View>
                }
                onClose={this.closeDrawer}
                tweenHandler={(ratio) => ({
                    mainOverlay: {
                        opacity: ratio,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    }
                })}>
                <Header style = {{height: 50}}>
                  <View style = {styles.headerContainer}>
                    <Text style = {styles.headerText}>{title}</Text>
                  </View>
                  <Left>
                      <Button transparent onPress={this.handleGoBack}>
                          <Image source = {require('../images/backArrow.png')} style = {{width: 20, height: 20}}/>
                      </Button>
                  </Left>
                </Header>
                {this.props.children}
            </Drawer>
        );
    }

    handleGoBack() {
        const {title, dispatch, goBack} = this.props;

        switch(title) {
            case '註冊':
                // dispatch(setNicknameError(false));
                // dispatch(setEmailError(false));
                // dispatch(setPasswordError(false));
                // dispatch(setNickname(''));
                // dispatch(setEmail(''));
                // dispatch(setPassword(''));
                break;
            default:
                break;
        }

        goBack();
    }

    openDrawer() {
        this.drawer._root.open();
    }

    closeDrawer() {
        this.drawer._root.close();
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default connect(state => ({

}))(NavHeader);
