import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import ForumNavbarItem from 'components/ForumNavbarItem.jsx';
import {connect} from 'react-redux';
import {getDogs} from 'utilities/dogs.js'
import {selectForum} from 'states/forum-actions.js';

import './ForumNavbarList.css';

class ForumNavbarList extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.handleSelectForum = this.handleSelectForum.bind(this);
    }

    render() {
        const dogs = getDogs();
        let children = dogs.map(dog => (
            <ListGroupItem key={dog.id} action className="navbar-item" onClick={() => this.handleSelectForum(dog.id)}>
                <ForumNavbarItem {...dog}/>
            </ListGroupItem>
        ));

        return (
            <Alert color="info" className="forum-navbar-list">
                <ListGroup>{children}</ListGroup>
            </Alert>
        );
    }

    handleSelectForum(forumId) {
        this.props.dispatch(selectForum(forumId));
    }

}

export default connect(state => ({
    ...state.forumNavbar
}))(ForumNavbarList);
