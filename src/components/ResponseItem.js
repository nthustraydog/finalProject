import {connect} from 'react-redux';
import React from 'react';
import moment from 'moment';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ListItem, Icon} from 'native-base';
import appColors from '../styles/colors';
// import appMetrics from '../styles/metrics';

class ResponseItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {ts, content} = this.props;

        return (
            <ListItem style={StyleSheet.flatten(styles.listItem)}>
                <View style={styles.left}>
                    {
                        (content.length % 2)? <Icon name='person' style={StyleSheet.flatten(styles.iconMale)}/>:
                                              <Icon name='person' style={StyleSheet.flatten(styles.iconFemale)}/>
                    }
                </View>
                <View style={styles.right}>
                    <Text style={styles.ts}>{moment(ts * 1000).calendar()}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </ListItem>
        );
    }
}

/*
 * When styling a large number of components, use StyleSheet.
 * StyleSheet makes it possible for a component to refer to a style object by ID
 * instead of creating a new style object every time.
 */
const styles = StyleSheet.create({
    listItem: {
    },
    left: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: appColors.secondaryPurple,
        marginRight: 15
    },
    iconMale: {
        color: 'rgb(0, 42, 170)'
    },
    iconFemale: {
        color: 'rgb(255, 0, 194)'
    },
    ts: {
        fontSize: 15
    },
    right: {
        width: 330
    },
    content: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default connect((state, ownProps) => ({
}))(ResponseItem);
