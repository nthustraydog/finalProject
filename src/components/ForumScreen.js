import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
    Container,
    Fab,
    Icon,
    Button
} from 'native-base';

import appColors from '../styles/colors';
import NavHeader from './NavHeader_new';
import ForumList from './ForumList';

import {selectDog} from '../states/forum-actions';

class ForumScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.handleSelectDog = this.handleSelectDog.bind(this);
    }

    render() {
        const {active} = this.state;
        const {navigate, goBack} = this.props.navigation;
        return (
            <NavHeader navigate={navigate} goBack={goBack} title='留言板'>
                <ForumList navigate={navigate} goBack={goBack}/>
                <Fab
                    active={active}
                    position='bottomRight'
                    direction='up'
                    containerStyle={active && StyleSheet.flatten(styles.fabActivedContainer)}
                    style={StyleSheet.flatten(styles.fab)}
                    onPress={() => this.setState({active: !active})}
                >
                    <Icon name='paw'/>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(9)}>
                        <Image source={require('../images/dog-9.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(8)}>
                        <Image source={require('../images/dog-8.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(7)}>
                        <Image source={require('../images/dog-7.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(6)}>
                        <Image source={require('../images/dog-6.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(5)}>
                        <Image source={require('../images/dog-5.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(4)}>
                        <Image source={require('../images/dog-4.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(3)}>
                        <Image source={require('../images/dog-3.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(2)}>
                        <Image source={require('../images/dog-2.png')} style={styles.image}/>
                    </Button>
                    <Button transparent block style={StyleSheet.flatten(styles.button)} onPress={() => this.handleSelectDog(1)}>
                        <Image source={require('../images/dog-1.png')} style={styles.image}/>
                    </Button>
                </Fab>
            </NavHeader>
        );
    }

    handleSelectDog(dogID) {
        this.setState({active: false});
        this.props.dispatch(selectDog(dogID));
        this.props.navigation.navigate('PostForm');
    }
}

const styles = StyleSheet.create({
    fabActivedContainer: {
        width: 65,
        borderRadius: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    fab: {
        backgroundColor: appColors.primaryPurple,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 999
    },
    button: {
        backgroundColor: appColors.secondaryPurple,
        width: 50,
        height: 50,
        borderRadius: 999,
    }
});

export default connect(state => ({
}))(ForumScreen);
