import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {
    Icon,
    Button,
    Label,
    Input,
    Item,
} from 'native-base';

import appColors from '../styles/colors';
import NavHeader from './NavHeader';
import {createPost} from '../states/forum-actions';

class PostFormScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            titleError: false,
            titleSuccess: false,
            contentError: false,
            contentSuccess: false
        };

        this.handletitleChange = this.handletitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleCreatePost = this.handleCreatePost.bind(this);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const {dogID} = this.props;
        const {title, titleError, titleSuccess, content, contentError, contentSuccess} = this.state;
        return (
            <NavHeader navigate={navigate} goBack={goBack} title='浪嚎一發'>
                <ScrollView>
                <View style={styles.header}>
                    <View style={styles.leftContainer}>{
                        (dogID == 1)? <Image source={require('../images/dog-1.png')} style={styles.left}/>:
                        (dogID == 2)? <Image source={require('../images/dog-2.png')} style={styles.left}/>:
                        (dogID == 3)? <Image source={require('../images/dog-3.png')} style={styles.left}/>:
                        (dogID == 4)? <Image source={require('../images/dog-4.png')} style={styles.left}/>:
                        (dogID == 5)? <Image source={require('../images/dog-5.png')} style={styles.left}/>:
                        (dogID == 6)? <Image source={require('../images/dog-6.png')} style={styles.left}/>:
                        (dogID == 7)? <Image source={require('../images/dog-7.png')} style={styles.left}/>:
                        (dogID == 8)? <Image source={require('../images/dog-8.png')} style={styles.left}/>:
                        (dogID == 9)? <Image source={require('../images/dog-9.png')} style={styles.left}/>:
                                      <Image source={require('../images/profile.png')} style={styles.left}/>
                    }</View>
                    <View>
                        <Icon name='arrow-round-back' style={StyleSheet.flatten(styles.link)}></Icon>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.right}>
                            <Icon name="person" style={StyleSheet.flatten(styles.rightIcon)}/>
                        </View>
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>標題</Text>
                </View>
                <Item error={titleError} success={titleSuccess} style={StyleSheet.flatten(styles.inputContainer)}>
                    <Input  multiline maxLength={1024}  value={title} onChange={this.handletitleChange} style={StyleSheet.flatten(styles.title)}/>
                    {titleError && <Icon name='close-circle'/>}
                    {titleSuccess && <Icon name='checkmark-circle'/>}
                </Item>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>內容</Text>
                </View>
                <Item error={contentError} success={contentSuccess} style={StyleSheet.flatten(styles.inputContainer)}>
                    <Input  multiline maxLength={1024}  value={content} onChange={this.handleContentChange} style={StyleSheet.flatten(styles.content)}/>
                    {contentError && <Icon name='close-circle'/>}
                    {contentSuccess && <Icon name='checkmark-circle'/>}
                </Item>
                <Button  bordered rounded outline onPress={this.handleCreatePost} style={StyleSheet.flatten(styles.button)}>
                    <Icon name='checkbox' style={StyleSheet.flatten(styles.icon)}></Icon>
                    <Text style={StyleSheet.flatten(styles.text)}>確認發文</Text>
                </Button>
            </ScrollView>
            </NavHeader>
        );
    }

    handletitleChange(e) {
        const {titleError: error, titleSuccess: success} = this.state;
        const title = e.nativeEvent.text
        if(error)
            this.setState({titleError: false});
        if(success)
            this.setState({titleSuccess: false});
        this.setState({title: title});
    }

    handleContentChange(e) {
        const {contentError: error, contentSuccess: success} = this.state;
        const content = e.nativeEvent.text
        if(error)
            this.setState({contentError: false});
        if(success)
            this.setState({contentSuccess: false});
        this.setState({content: content});
    }

    handleCreatePost() {
        const {dispatch, dogID} = this.props;
        const {title, content} = this.state;
        const condition = (!title && !content)? 3:
                          (!title)            ? 2:
                          (!content)          ? 1: 0;

        switch (condition) {
            case 3:
                this.setState({
                    titleError: true,
                    titleSuccess: false,
                    contentError: true,
                    contentSuccess: false
                });
                return;
            case 2:
                this.setState({
                    titleError: true,
                    titleSuccess: false,
                    contentError: false,
                    contentSuccess: true
                });
                return;
            case 1:
                this.setState({
                    titleError: false,
                    titleSuccess: true,
                    contentError: true,
                    contentSuccess: false
                });
                return;
            default:
                this.setState({
                    titleError: false,
                    titleSuccess: true,
                    contentError: false,
                    contentSuccess: true
                }, () => {
                    dispatch(createPost(title, content));
                    this.props.navigation.goBack();
                });
        }
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30
    },
    leftContainer: {
        backgroundColor: appColors.secondaryPurple,
        width: 150,
        height: 150,
        borderRadius: 999
    },
    left: {
        marginTop: 15,
        marginLeft: 15,
        width: 120,
        height: 120,
        borderRadius: 999
    },
    link: {
        marginHorizontal: 10,
        fontSize: 40,
        color: appColors.primaryPurple
    },
    rightContainer: {
        backgroundColor: appColors.secondaryPurple,
        width: 150,
        height: 150,
        borderRadius: 999
    },
    right: {
        marginTop: 15,
        marginLeft: 15,
        width: 120,
        height: 120,
        borderRadius: 999,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIcon:{
        fontSize: 100,
        color: appColors.primaryPurple
    },
    labelContainer: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: appColors.secondaryPurple,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: 300
    },
    label: {
        fontSize: 20,
        color: appColors.primaryPurple,
    },
    inputContainer: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        width: 300,
        borderBottomWidth: 2
    },
    title: {
        height: 60
    },
    content: {
        height: 105
    },
    button: {
        alignSelf: 'center',
        borderColor: appColors.primaryPurple,
        marginTop: 30
    },
    icon: {
        fontSize: 20,
        color: appColors.primaryPurple
    },
    text: {
        color: appColors.primaryPurple,
        fontSize: 20
    }
});

export default connect(state => ({
    dogID: state.postForm.dogID
}))(PostFormScreen);
