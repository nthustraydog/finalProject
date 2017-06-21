import React from 'react';
import PropTypes from 'prop-types';
import ForumNavbarList from 'components/ForumNavbarList.js';
import ForumForm from 'components/ForumForm.js';
import ForumList from 'components/ForumList.js';
import Post from 'components/Post.js';
import {connect} from 'react-redux';
// import {} from 'states/forum-actions.js';
import './Forum.css';

class Forum extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {postOpen, post} = this.props;
        const forumLayer = (postOpen)? 'bg': 'fg';
        const postLayer = (postOpen)? 'fg': 'bg';
        return (
            <div className="forum">
                <div className={`d-flex flex-row justify-content-center board ${forumLayer}`}>
                    <div className="navbar mt-2 "><ForumNavbarList/></div>
                    <div className="d-flex flex-column mt-2">
                        <div className="form"><ForumForm/></div>
                        <div className="list mt-4"><ForumList/></div>
                    </div>
                </div>
                <div className={`d-flex flex-row justify-content-center post ${postLayer}`}>
                    {postOpen && <Post {...post}/>}
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    ...state.forum
}))(Forum);
