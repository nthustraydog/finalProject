import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
    Container,
    Header,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Title,
    Drawer
} from 'native-base';

import ProfileSidebar from './ProfileSidebar';



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
                content={<ProfileSidebar closeDrawer={this.closeDrawer} navigate={navigate} goBack={goBack} title={title}/>}
                onClose={this.closeDrawer}
                tweenHandler={(ratio) => ({
                    mainOverlay: {
                        opacity: ratio,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    }
                })}>
                <Container>
                    <Header>
                        <Button transparent onPress={this.openDrawer}>
                            <Icon name='menu'/>
                        </Button>
                        { (title !== 'home')? <Body style={StyleSheet.flatten(styles.body)}><Title>{title}</Title></Body>
                                            : <Body style={StyleSheet.flatten(styles.body)}><Title></Title></Body>}
                        { title !== 'home' &&
                            <Button transparent onPress={this.handleGoBack}>
                                 <Icon name='return-left'/>
                             </Button>
                         }
                    </Header>
                    {this.props.children}
                </Container>
            </Drawer>
        );
    }

    handleGoBack() {
        const {title, dispatch, goBack} = this.props;

        switch(title) {
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
    body: {
        marginHorizontal: 110
    }
});

export default connect(state => ({
    // ...state.registry,
}))(NavHeader);

// {
//     (title === 'home')? (
//         <Right>
//             <Button iconLeft outline rounded light small onPress={() => navigate('Registry')} style={{marginRight: 5}}>
//                 <Icon name='md-person-add'></Icon>
//                 <Text style={styles.text}>註冊</Text>
//             </Button>
//             <Button iconLeft outline rounded light small onPress={() => navigate('Login')}>
//                 <Icon name='log-in'></Icon>
//                 <Text style={styles.text}>登入</Text>
//             </Button>
//         </Right>
//     ): (
//         <Right>
//             <Button transparent onPress={this.handleGoBack}>
//                 <Icon name='return-left'/>
//             </Button>
//         </Right>
//     )
// }

// case '註冊':
//     dispatch(setNicknameError(false));
//     dispatch(setEmailError(false));
//     dispatch(setPasswordError(false));
//     dispatch(setNickname(''));
//     dispatch(setEmail(''));
//     dispatch(setPassword(''));
//     break;
