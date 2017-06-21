import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import 'decorations/style.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import 'decorations/owl.transitions.css';


export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const options = {
          items: 3,
          margin: 10,
          rewind: true,
          autoplay: true,
          autoplayTimeout: 2500,
        };

        const events = {

        };

        return (
            <div id = "owl-Wrapper" className = "wow animated fadeIn">

              <OwlCarousel options={options} events={events} >
                <div className="item">
    							<img src="index-dogs/bear.jpg" alt="dog1"/>
    							<div className="name">
    								<p>小熊 Bear ♂</p>
    							</div>
    						</div>
    						<div className="item">
    							<img src="index-dogs/crow.jpg" alt="dog2"/>
    							<div className="name">
    								<p>烏鴉 Crow ♂</p>
    							</div>
    						</div>
    						<div className="item">
    							<img src="index-dogs/hole.jpg" alt="dog3"/>
    							<div className="name">
    								<p>洞洞 Hole ♂</p>
    							</div>
    						</div>
    						<div className="item">
    							<img src="index-dogs/Britney.jpg" alt="dog3"/>
    							<div className="name">
    								<p>布蘭妮 Britney ♀</p>
    							</div>
    						</div>
              </OwlCarousel>
              <div className = "news wow animated fadeIn">
                <h1>News</h1>
                <ul>
                  <li>2017/05/19 鮮食大會</li>
                  <li>2017/05/20 洗狗大會</li>
                  <li>2017/05/21 交流活動</li>
                  <li>2017/05/24 戴更基講座</li>
                  <li>2017/06/13 期末社大</li>
                </ul>
              </div>
              <div className = "news about-us wow animated fadeIn">
                <h1>About Us</h1>
                <p className = "paragraph">清華大學關懷生命社以T.N.R（捕捉、結紮、放回），來減少校園流浪犬，並讓留在校園的狗狗能與師生和平相處。</p>
                <p className = "paragraph">我們定期舉辦講座，邀請獸醫師、訓犬師、動保人士來分享經驗，讓更多的人能夠接觸到動物保護的領域。</p>
                <p className = "paragraph">我們也舉辦洗狗大會，讓校內外的人都有機會與可愛的狗狗們接觸。除了這些，懷生社盡力在送養校園流浪犬，讓他們能找到一個家。許多人認為狗狗在校內的生活很開心，但實際上他們還是流浪犬，生活在風險當中，所以希望大家如果願意愛他們一輩子，可以領養校園流浪犬喔！</p>
              </div>
          </div>
        );
    }
}
