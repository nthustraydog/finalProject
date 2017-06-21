import React from 'react';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import IndexPage from 'components/carelife_index.jsx';
import CarelifeIntro from 'components/intro.jsx';
import CarelifeQuestion from 'components/question.jsx';
import CarelifePromotion from 'components/promotion.jsx';
import All from 'components/all_dog.jsx';
import Each from 'components/each_dog.jsx';
import Today from 'components/Today.jsx';
import Tell from 'components/tell.jsx';
import Forum from 'components/Forum.jsx';
import Activity from 'components/Activity.jsx';

import {toggleNavbar} from 'states/main-actions.js';
import {setID} from 'states/all-actions.js';

import 'decorations/page_frame.css';
import 'decorations/animate.css';


class Main extends React.Component {
  static propTypes = {
      navbarToggle: PropTypes.bool,
      store: PropTypes.object,
      dispatch: PropTypes.func,
      id: PropTypes.string
  };
  constructor(props) {
    super(props);

    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    this.handleSetId = this.handleSetId.bind(this);
  }

  componentDidMount() {
      new WOW().init();
  }

  handleNavbarToggle() {
      this.props.dispatch(toggleNavbar());
  }

  handleSetId(ID) {
      this.props.dispatch(setID(ID));
  }

  render() {
    return (
      <Router>
        <div className = "wrapper">
          <div>
            <Navbar color="faded" light toggleable>
              <NavbarToggler right onClick={this.handleNavbarToggle} />
              <img src = "./logo.png" style = {{width: "15%"}}/>
              <Collapse isOpen={this.props.navbarToggle} navbar>
                <Nav className="text-info" navbar style = {{fontSize: "2rem"}}>
                  <NavItem>
                    <NavLink tag={Link} to='/'>首頁</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/carelife_intro'>簡介</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to='/promotion'>宣導</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/question'>FAQ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/dog_intro'>常見狗狗</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/wash_dog'>預約</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/tell'>通報</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to='/forum'>留言板</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <Route exact path="/" render={() => (
              <IndexPage />
          )}/>
          <Route exact path="/carelife_intro" render={() => (
              <CarelifeIntro />
          )}/>

          <Route exact path="/promotion" render={() => (
              <CarelifePromotion />
          )}/>
          <Route exact path="/question" render={() => (
              <CarelifeQuestion />
          )}/>
          <Route exact path="/dog_intro" render={() => (
              <All id={this.props.id} handleIdchange = {this.handleSetId}/>
          )}/>
          <Route exact path="/eachDog" render={() => (
              <Each id={this.props.id}/>
          )}/>
          <Route exact path="/wash_dog" render={() => (
              <Today />
          )}/>
          <Route exact path="/tell" render={() => (
              <Tell />
          )}/>
          <Route exact path="/forum" render={() => (
              <Forum/>
          )}/>

          <div className = "footer">
      			<div className = "shareContainer wow animated bounceInLeft">
      				<div className = "share_twitter" onClick = {() => {
                  window.open('http://twitter.com/share?text=這個粉專超讚！！%0A&url=https://www.facebook.com/NthuCarelife/','test', 'left = 100, top = 200, width = 600, height = 400');
              }}></div>
              <div className = "share_facebook" onClick = {() => {
                  window.open('https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https://www.facebook.com/NthuCarelife/&redirect_uri=https://developers.facebook.com/tools/explorer',
'test', 'left = 100, top = 200, width = 600, height = 600');
              }}></div>
              <div className = "share_google" onClick = {() => {
                  window.open('https://plus.google.com/share?url=https%3A//www.facebook.com/NthuCarelife/','test', 'left = 100, top = 200, width = 600, height = 600');
              }}></div>
      			</div>

      			<div id = "related-link" className = "wow animated zoomInUp">
      				<h1>相關連結</h1>

      				<img src = "SPCA.png" className = "link-picture" onClick = {() => {window.open('http://www.spca.org.tw/');}}/>
      				<img src = "animal_news.png" className = "link-picture" onClick = {() => {window.open('http://www.tanews.org.tw/');}}/>
      				<img src = "adopt_map.png" className = "link-picture" onClick = {() => {window.open('http://www.meetpets.org.tw/');}}/>
      				<img src = "stray_animal.png" className = "link-picture" onClick = {() => {window.open('http://www.doghome.org.tw/phpbb2/indexnew.php');}}/>
      			</div>

      			<div id = "related-link" className = "wow animated zoomInUp">
      				<h1>聯絡我們</h1>
      				<p>◆當你遇到傷犬、幼犬，或是見到狗狗有不當舉動 ( 追人、攻擊等)，請聯絡懷生社！非緊急事件，請盡量以網路通報或簡訊告知
      				<br/>
      				粉絲專頁：清華大學關懷生命社
      				<a href = "https://www.facebook.com/NthuCarelife/" target = "_blank">NthuCarelife</a>
      				</p>
      				<p>
      				緊急聯絡人：<br/>
            社　長／李　昀　0958324662<br/>副社長／陳志祥　0973674511<br/>醫療長／謝昀達　0921600831
      				</p>
      			</div>

      			<p className = "wow animated fadeInUp">&copy 2016 Care Life — All rights reserved.</p>
      		</div>
        </div>
      </Router>
    );
  }
}
export default connect(state => ({
    ...state.main,
    id: state.id,
}))(Main);
