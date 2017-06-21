import {connect} from 'react-redux';
import React from 'react';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {ListView, RefreshControl} from 'react-native';
import {listForum, listForumMore} from '../states/forum-actions';
import ForumItem from './ForumItem';

class ForumList extends React.Component {
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
        this.props.dispatch(listForum());
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch, forumId, posts} = this.props;
        if(forumId !== nextProps.forumId)
            dispatch(listForum());
        if(posts !== nextProps.posts)
            this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.posts)});
    }

    render() {
        const {navigate, goBack,refreshing, hasMore, posts} = this.props;
        return (
            <ListView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.handleRefresh} />}
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                dataSource={this.state.dataSource}
                renderRow={(post) => {return <ForumItem post={post} navigate={navigate} goBack={goBack}/>;}}
                canLoadMore={() => {
                    if (refreshing || !posts.length)
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
        this.props.dispatch(listForum());
    }

    handleLoadMore() {
        const {dispatch, lastID, posts} = this.props;
        const start = posts[posts.length - 1].id;
        if (lastID !== start)
            dispatch(listForumMore(start));
    }
}

export default connect((state) => ({
    refreshing: state.forum.forumRefreshing,
    lastID: state.forum.forumLastID,
    posts: state.forum.posts,
    hasMore: state.forum.forumHasMore
}))(ForumList);
