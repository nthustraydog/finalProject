import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import {
    Container,
    Button,
    Icon
} from 'native-base';

import appColors from '../styles/colors';
import {selectForum} from '../states/forum-actions';

class ProfileSidebar extends React.Component {
    constructor(props) {
        super(props)

        this.handleSelectForum = this.handleSelectForum.bind(this);
    };

    render() {
        const {navigate, goBack, title} = this.props;
        return (
            <Container style={StyleSheet.flatten(styles.container)}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                    <Image source={require('../images/sidebar_logo.png')} />
                    </View>
                </View>
                {
                    (title === '留言板') &&
                    <View>
                        <Button transparent block onPress={() => this.handleSelectForum(0)} style={StyleSheet.flatten(styles.button)}>
                            <Icon name='apps' style={StyleSheet.flatten(styles.all)}/>
                            <Text style={styles.text}>全部</Text>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(1)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-1.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>畫眉</Text>
                            <Icon name='male' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(2)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-2.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>乖狗</Text>
                            <Icon name='male' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(3)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-3.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>布丁</Text>
                            <Icon name='male' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(4)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-4.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>桃子</Text>
                            <Icon name='female' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(5)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-5.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>ㄚ幹</Text>
                            <Icon name='female' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(6)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-6.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>小豬</Text>
                            <Icon name='female' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(7)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-7.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>丸子</Text>
                            <Icon name='female' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(8)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-8.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>金毛</Text>
                            <Icon name='male' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                        <Button transparent block onPress={() => this.handleSelectForum(9)} style={StyleSheet.flatten(styles.button)}>
                            <Image source={require('../images/dog-9.png')} style={styles.dogImage}/>
                            <Text style={styles.text}>黑嚕嚕</Text>
                            <Icon name='male' style={StyleSheet.flatten(styles.icon)}/>
                        </Button>
                    </View>
                }
            </Container>
        );
    }

    handleSelectForum(forumID) {
        this.props.dispatch(selectForum(forumID));
        this.props.closeDrawer();
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.secondaryPurple
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.primaryPurple
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 170,
        borderRadius: 100,
        backgroundColor: appColors.secondaryPurple
    },
    dogImage: {
        width: 40,
        height: 40,
        borderRadius: 999,
    },
    button: {
        width: undefined,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 20,
        marginHorizontal: 15
    },
    all: {
        fontSize: 30,
        marginLeft: 10,
        color: appColors.primaryPurple
    },
    icon: {
        fontSize: 20,
        color: appColors.primaryPurple
    }
});

export default connect(state => ({
}))(ProfileSidebar);
