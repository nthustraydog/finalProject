import {connect} from 'react-redux';
import React from 'react';
import moment from 'moment';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ListItem, Icon} from 'native-base';
import appColors from '../styles/colors';
// import appMetrics from '../styles/metrics';
import {selectPost} from '../states/forum-actions';

class ForumItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectPost = this.handleSelectPost.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.numResponses !== this.props.numResponses) {
            
        }
    }

    render() {
        const {forumID, title, numResponses} = this.props.post;
        return (
            <ListItem onPress={this.handleSelectPost}>
                {
                    (numResponses >= 4)? <View style={styles.purpleBadge}><Text style={styles.number}>{numResponses}</Text></View>:
                    (numResponses >= 3)? <View style={styles.redBadge}><Text style={styles.number}>{numResponses}</Text></View>:
                    (numResponses >= 2)? <View style={styles.orangeBadge}><Text style={styles.number}>{numResponses}</Text></View>:
                    (numResponses >= 1)? <View style={styles.yellowBadge}><Text style={styles.number}>{numResponses}</Text></View>:
                                           <View style={styles.greenBadge}><Text style={styles.number}>{numResponses}</Text></View>
                }
                <Text style={styles.title}>{title}</Text>
                <View style={styles.icon}>
                    <Text style={styles.forum}>{
                        (forumID==1) ? '畫眉':
                        (forumID==2) ? '乖狗':
                        (forumID==3) ? '布丁':
                        (forumID==4) ? '桃子':
                        (forumID==5) ? 'ㄚ幹':
                        (forumID==6) ? '小豬':
                        (forumID==7) ? '丸子':
                        (forumID==8) ? '金毛':
                        (forumID==9) ? '黑嚕嚕': ''
                    }</Text>
                </View>
            </ListItem>
        );
    }

    handleSelectPost() {
        const {post, dispatch, navigate} = this.props;
        dispatch(selectPost(post));
            navigate('Post');

    }
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 35,
        borderRadius: 5,
        backgroundColor: appColors.secondaryPurple,
    },
    forum: {
        fontSize: 15,
        color: appColors.primaryPurple
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 250,
        marginHorizontal: 12
    },
    greenBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: 'rgb(13, 170, 22)',
    },
    yellowBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: 'rgb(224, 228, 3)'
    },
    orangeBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: 'rgb(255, 164, 9)'
    },
    redBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: 'rgb(255, 0, 0)'
    },
    purpleBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 999,
        backgroundColor: appColors.primaryPurple
    },
    number: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    }
});

export default connect((state, ownProps) => ({
}))(ForumItem);
