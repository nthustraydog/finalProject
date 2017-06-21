import {connect} from 'react-redux';
import React from 'react';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {ListView, RefreshControl} from 'react-native';

import{listResponses, listMoreResponses} from '../states/forum-actions';
import ResponseItem from './ResponseItem';

class ResponseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2)
            })
        };

        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    componentDidMount() {
        const {postID, dispatch} = this.props
        dispatch(listResponses(postID));
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch, postID, responses} = this.props;
        if(postID !== nextProps.postID)
            dispatch(listResponses(nextProps.postID));
        if(responses !== nextProps.responses)
            this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.responses)});
    }

    render() {
        const {navigate, goBack, refreshing, hasMore, responses} = this.props;
        return (
            <ListView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.handleRefresh} />}
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                dataSource={this.state.dataSource}
                renderRow={(r) => {return <ResponseItem {...r}/>;}}
                canLoadMore={() => {
                    if (refreshing || (responses.length > 0))
                        return false;
                    return hasMore;
                }}
                distanceToLoadMore={300}
                onLoadMoreAsync={this.handleLoadMore}
                style={{backgroundColor: '#fff'}}
            />
        );
    }

    handleRefresh() {
        const {dispatch, postID} = this.props;
        dispatch(listResponses(postID));
    }

    handleLoadMore() {
        const {dispatch, lastID, responses} = this.props;
        const start = responses[responses.length - 1].id;
        if (lastID !== start)
            dispatch(listMoreResponses(postID, start));
    }
}

export default connect((state) => ({
    refreshing: state.post.responsesRefreshing,
    lastID: state.post.responsesLastID,
    responses: state.post.responses,
    hasMore: state.post.responsesHasMore
}))(ResponseList);
