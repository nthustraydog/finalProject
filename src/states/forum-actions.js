import {
    getForum as getForumWithApi,
    getResponses as getResponsesWithApi,
    createPost as createPostWithApi,
    createResponse as createResponseWithApi,
} from '../api/query.js';

// Forum

function setForumID(forumID) {
    return {
        type: '@FORUM/SET_FORUMID',
        forumID
    }
}

function startListForum() {
    return {
        type: '@FORUM/START_LIST_FORUM'
    };
}

function endListForum(posts) {
    return {
        type: '@FORUM/END_LIST_FORUM',
        posts
    };
}

function startListForumMore(start) {
    return {
        type: '@FORUM/START_LIST_FORUM_MORE',
        start
    };
}

function endListForumMore(posts) {
    return {
        type: '@FORUM/END_LIST_FORUM_MORE',
        posts
    };
}

function insertPost(post) {
    return {
        type: '@FORUM/INSERT_POST',
        post
    };
}

function updateNumResponses(postID) {
    return {
        type: 'FORUM/UPDATE_NUM_RESPONSES'
    }
}

export function selectForum(forumID) {
    return (dispatch, getState) => {
        dispatch(setForumID(forumID));
        dispatch(listForum());
    }
}

export function listForum() {
    return (dispatch, getState) => {
        dispatch(startListForum());
        return getForumWithApi(getState().forum.forumID).then(posts => {
            dispatch(endListForum(posts));
        }).catch(err => {
            dispatch(endListForum());
            console.error('Error listing forum', err);
        });
    };
};

export function listForumMore(start) {
    return (dispatch, getState) => {
        dispatch(startListForumMore(start));
        return getForumWithApi(getState().forum.forumID, start).then(posts => {
            dispatch(endListForumMore(posts));
        }).catch(err => {
            dispatch(endListForumMore());
            console.error('Error listing forum more', err);
        });
    };
};

// Post

function setPost(post) {
    return {
        type: '@POST/SET_POST',
        post
    };
}

function updatePost() {
    return {
        type: '@POST/UPDATE_POST'
    };
}

export function selectPost(post) {
    return (dispatch, getState) => {
        dispatch(setPost(post));
        dispatch(listResponses(post.id));
    }
}

function startListResponses() {
    return {
        type: '@POST/START_LIST_RESPONSES'
    };
}

function endListResponses(responses) {
    return {
        type: '@POST/END_LIST_RESPONSES',
        responses
    };
}

function startListMoreResponses(start) {
    return {
        type: '@POST/START_LIST_MORE_RESONSES',
        start
    };
}

function endListMoreResponses(responses) {
    return {
        type: '@POST/END_LIST_MORE_RESPONSES',
        responses
    };
}

function insertResponse(response) {
    return {
        type: '@POST/INSERT_RESPONSE',
        response
    };
}

export function listResponses() {
    return (dispatch, getState) => {
        dispatch(startListResponses());
        return getResponsesWithApi(getState().post.post.id).then(responses => {
            dispatch(endListResponses(responses));
        }).catch(err => {
            dispatch(endListResponses());
            console.error('Error listing responses', err);
        });
    };
};

export function listMoreResponses(start) {
    return (dispatch, getState) => {
        dispatch(startListMoreResponses(start));
        return getResponsesWithApi(getState().post.post.id, start).then(responses => {
            dispatch(endListMoreResponses(responses));
        }).catch(err => {
            dispatch(endListMoreResponses());
            console.error('Error listing more responses', err);
        });
    };
};

// PostForm

export function selectDog(dogID) {
    return {
        type: 'POST_FORM/SELECT_DOG',
        dogID
    }
}

export function createPost(title, content) {
    return (dispatch, getState) => {
        return createPostWithApi(getState().postForm.dogID, title, content).then(post => {
            if(post.forumID === getState().forumID) {
                dispatch(insertPost(post));
            } else {
                dispatch(listForum(getState().forumID));
            }
        }).catch(err => {
            console.error('Error creating post', err);
        });
    };
};


// ResponseForm

export function createResponse(content) {
    return (dispatch, getState) => {
        return createResponseWithApi(getState().post.post.id, content).then(response => {
            console.log(response);
            dispatch(listForum());
            dispatch(listResponses())
            // dispatch(insertResponse(response));
            dispatch(updatePost());
            // dispatch(updateNumResponses(getState().post.post.id));
        }).catch(err => {
            console.error('Error creating response', err);
        });
    };
};
