import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image, ScrollView, Keyboard} from 'react-native';
import {
    List,
    ListItem,
    Button,
    Input,
    Icon,
} from 'native-base';

import {createResponse} from '../states/forum-actions';
import appColors from '../styles/colors';
import NavHeader from './NavHeader';
import ResponseList from './ResponseList';

class PostScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            contentError: false,
            reload: false
        }
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleCreateResponse = this.handleCreateResponse.bind(this);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const {title, content, numResponses} = this.props.post;
        return (
            <NavHeader navigate={navigate} goBack={goBack} title='浪文'>
                    <View style={styles.post}>
                        <View style={styles.contextContainer}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>標題</Text>
                            </View>
                            <View style={styles.context}>
                                <Text style={styles.contextText}>{title}</Text>
                            </View>
                        </View>
                        <View style={styles.contextContainer}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>內容</Text>
                            </View>
                            <View style={styles.context}>
                                <Text style={styles.contextText}>{content}</Text>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                {this.state.contentError && <Icon name='close-circle' style={StyleSheet.flatten(styles.error)}></Icon>}
                                <Input  value={this.state.content} onChange={this.handleContentChange} style={StyleSheet.flatten(styles.input)}>
                                </Input>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button rounded  style={StyleSheet.flatten(styles.button)} onPress={this.handleCreateResponse}>
                                    <Icon name='send' style={StyleSheet.flatten(styles.btnIcon)}/>
                                    <Text style={StyleSheet.flatten(styles.btnText)}>確認回覆</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={styles.responses}>
                            {
                                (numResponses > 0) ? <ResponseList/> : (
                                    <View style={styles.tempContainer}>
                                        <Text style={styles.temp}>沙發區好冷清...</Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
            </NavHeader>
        );
    }

    handleContentChange(e) {
        const {contentError: error} = this.state;
        const content = e.nativeEvent.text;
        if(error) this.setState({contentError: false});
        this.setState({content: content});
    }

    handleCreateResponse() {
        const {dispatch} = this.props;
        const {content, contentError, reload} = this.state;
        Keyboard.dismiss();
        if(!content) {
            this.setState({contentError: true});
            return;
        }

        dispatch(createResponse(content));
        this.setState({content: '', reload: !reload});
    }

}

const styles = StyleSheet.create({
    post: {
        flex: 1
    },
    contextContainer: {
        marginHorizontal: 10,
        marginTop: 8
    },
    label: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.secondaryPurple,
        borderTopLeftRadius: 999,
        borderTopRightRadius: 999,
        marginTop: 5,

    },
    labelText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: appColors.primaryPurple
    },
    context: {
        backgroundColor: '#FFF',
        borderColor: appColors.secondaryPurple,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 8,
    },
    contextText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    form: {
        backgroundColor: '#FFF',
        borderColor: appColors.secondaryPurple,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 3,
        borderRadius: 999,
        marginTop: 5,
        marginHorizontal: 5
    },
    error: {
        position: 'relative',
        color: 'red',
        left: 10,
        top: 10
    },
    inputContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    input: {
    },
    buttonContainer: {
        alignSelf: 'flex-end'
    },
    button: {
        backgroundColor: appColors.secondaryPurple,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 120,
        height: 50,
    },
    btnIcon: {
        fontSize: 25,
        color: appColors.primaryPurple
    },
    btnText: {
        fontSize: 16,
        color: appColors.primaryPurple
    },
    responses: {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: appColors.primaryPurple,
        marginHorizontal: 10,
        marginTop: 3
    },
    tempContainer: {
        backgroundColor: appColors.secondaryPurple,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: appColors.primaryPurple
    }
});

export default connect(state => ({
    post: state.post.post
}))(PostScreen);
