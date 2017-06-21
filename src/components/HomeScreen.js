import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {
    Container,
    Header,
    Content,
    Footer,
    Left,
    Right,
    Title,
    Button,
    Icon
} from 'native-base';

import NavHeader from './NavHeader_new';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <NavHeader navigate={navigate} goBack={goBack} title='home'>
                <Content>
                    <Grid>
                        <Row style={styles.logo}>
                            <Image source={require('../images/logo.png')} ></Image>
                        </Row>
                        <Row>
                            <Col>
                                <Image source={require('../images/01_introduction.png')} style={styles.image}>
                                    <Button transparent block block onPress={() => navigate('Intro')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>社團簡介</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/02_notification.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('Activity')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>活動通知</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/03_promotion.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('Promote')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>重要宣導</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Image source={require('../images/04_FAQ.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('Question')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>常見問題</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/05_handbook.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('校園狗狗們')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>校浪圖鑑</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/06_adopt.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('認養')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>認養專區</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Image source={require('../images/07_report.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('事件通報')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>事件通報</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/08_achievement.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('成就簿')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>成就簿</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image source={require('../images/09_forum.png')} style={styles.image}>
                                    <Button transparent block onPress={() => navigate('Forum')} style={StyleSheet.flatten(styles.button)}/>
                                </Image>
                                <Row style={styles.row}>
                                    <Text style={styles.text}>留言板</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <Footer>
                </Footer>
            </NavHeader>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        alignItems: 'center',
        alignSelf: 'center',
        width: 130,
        height: 130
    },
    button: {
        height: 130
    },
    row: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 16
    }
});

export default connect(state => ({
}))(HomeScreen);
