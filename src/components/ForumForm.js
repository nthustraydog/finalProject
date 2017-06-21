import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Button,
    Input,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {getDogs} from 'utilities/dogs.js';
import {
    selectBarker,
    setBarkerToggle,
    inputTitle,
    inputBody,
    setTitleDanger,
    setBodyDanger,
    bark
} from 'states/forum-actions.js';
import {connect} from 'react-redux';
import 'utilities/Dog.css'
import './ForumForm.css';

class ForumForm extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);

        this.titleInput = null;
        this.bodyInput = null;

        this.handleSelectBarker = this.handleSelectBarker.bind(this);
        this.handleBarkerToggle = this.handleBarkerToggle.bind(this);
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleBodyInputChange = this.handleBodyInputChange.bind(this);
        this.handleBark = this.handleBark.bind(this);
    }

    render() {
        const {barkerId, barkerToggle, title, body} = this.props
        const titleDanger = (this.props.titleDanger)? 'has-danger': "";
        const bodyDanger = (this.props.bodyDanger)? 'has-danger': "";
        const children = getDogs().map(barker =>{
            return (
                (barker.id > 0) && <DropdownItem className="dropdown dropdown-item" key={barker.id} onClick={() => this.handleSelectBarker(barker.id)}>{barker.name}</DropdownItem>
            );
        })

        return (
            <Alert color="success" className="d-flex forum-form mt-2">
                <div className="col-8 left">
                    <Alert color="" className={`${titleDanger} title`}>
                        <div>標題</div>
                        <Input className="title-text" type="textarea" getRef={el => {this.titleInput = el}} value={title} onChange={this.handleTitleInputChange} placeholder="無題"/>
                    </Alert>
                    <Alert color="" className={`${bodyDanger} body`}>
                        <div>內容</div>
                        <Input className="body-text" type="textarea"  getRef={el => {this.bodyInput = el}} value={body} onChange={this.handleBodyInputChange} placeholder="就是廢文"/>
                    </Alert>
                </div>
                <div className="col-4 right">
                    <div className={`dog dog-${barkerId} barker mt-5 ml-3`}></div>
                    <ButtonDropdown className="col mt-3 dropdown" isOpen={barkerToggle} toggle={this.handleBarkerToggle}>
                        <DropdownToggle className="dropdown" caret>{getDogs()[barkerId].name}</DropdownToggle>
                        <DropdownMenu>{children}</DropdownMenu>
                    </ButtonDropdown>
                    <div className="col mt-5 pt-4 button">
                        <Button color="info" id="btn-bark" onClick={this.handleBark}>
                            <i className="fa fa-paw" aria-hidden="true"></i>
                            &nbsp;&nbsp;Bark
                        </Button>
                    </div>
                </div>
            </Alert>
        );
    }

    handleSelectBarker(barkerId) {
        this.props.dispatch(selectBarker(barkerId));
    }

    handleBarkerToggle() {
        this.props.dispatch(setBarkerToggle(!this.props.barkerToggle));
    }

    handleTitleInputChange(e) {
        const title = e.target.value
        this.props.dispatch(inputTitle(title));
        if (title && this.props.titleDanger) {
            this.props.dispatch(setTitleDanger(false));
        }
    }

    handleBodyInputChange(e) {
        const body = e.target.value
        this.props.dispatch(inputBody(body));
        if (body && this.props.bodyDanger) {
            this.props.dispatch(setBodyDanger(false));
        }
    }

    handleBark() {
        const {barkerId, title, body, dispatch} = this.props;
        console.log("barkerId: " + barkerId + " title: " + title + " body: " + body);
        if (barkerId === 0) {
            dispatch(setBarkerToggle(true));
            return;
        }
        if (!title) {
            dispatch(setTitleDanger(true));
            return;
        }
        if (!body) {
            dispatch(setBodyDanger(true));
            return;
        }

        dispatch(bark(barkerId, title, body));
        dispatch(selectBarker(0));
        dispatch(inputTitle(''));
        dispatch(inputBody(''));
    }
}

export default connect(state => ({
    ...state.forumForm
}))(ForumForm);
