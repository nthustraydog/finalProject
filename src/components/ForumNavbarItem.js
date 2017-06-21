import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {} from 'states/forum-actions.js';

import 'utilities/Dog.css'
import './ForumNavbarItem.css';

class ForumNavbarItem extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, gender} = this.props;

        return (
            <div>
                {
                    (id===0)?(
                        <div className='forum-navbar-item'>
                            校浪分類討論區
                        </div>
                    ):(
                        <div className='d-flex flex-row forum-navbar-item'>
                            <div className = {`dog dog-${id}`}></div>&nbsp;&nbsp;&nbsp;
                            <div className="d-flex align-self-center">
                                <div className="name">{name}</div>&nbsp;
                                <div className="gender">
                                    {(gender==='male')? <i className="fa fa-mars" aria-hidden="true"></i>
                                                      : <i className="fa fa-venus" aria-hidden="true"></i>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default connect(state => ({
}))(ForumNavbarItem);
