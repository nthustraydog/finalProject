const initForumState = {
    forumID: 0,
    forumRefreshing: false,
    forumLastID: undefined, // id of post from which to start
    posts: [],
    forumHasMore: true
};

export function forum(state = initForumState, action) {
    switch (action.type) {
        case '@FORUM/SET_FORUMID':
            return {
                ...state,
                forumID: action.forumID
            };
        case '@FORUM/START_LIST_FORUM':
            return {
                ...state,
                forumRefreshing: true,
                forumLastID: undefined
            };
        case '@FORUM/END_LIST_FORUM':
            if (!action.posts)
                return {
                    ...state,
                    forumRefreshing: false
                };
            return {
                ...state,
                forumRefreshing: false,
                posts: action.posts,
                forumHasMore: action.posts.length > 0
            };
        case '@FORUM/START_LIST_FORUM_MORE':
            return {
                ...state,
                forumLastID: action.start
            };
        case '@FORUM/END_LIST_FORUM_MORE':
            if (!action.posts)
                return state;
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                forumHasMore: action.posts.length > 0
            };
        case '@FORUM/INSERT_POST':
            var newPosts = state.posts.slice();
            newPosts.unshift(action.post);
            return {
                ...state,
                posts: newPosts
            };
        case '@FORUM/UPDATE_NUM_RESPONSES':
            var newPosts = state.posts.map(p => {
                if (p.id === action.postID) {
                    const newPost = {
                        ...p,
                        numResponses: p.numResponses + 1
                    }
                    return newPost;
                }
                return p;
            });
            return {
                ...state,
                posts: newPosts
            };
        default:
            return state;
    }
}

const initPostFormState = {
    dogID: undefined,
    title: '',
    content: '',
};

export function postForm(state = initPostFormState, action) {
    switch (action.type) {
        case 'POST_FORM/SELECT_DOG':
            return {
                ...state,
                dogID: action.dogID
            };
        case 'POST_FORM/INPUT_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'POST_FORM/INPUT_CONTENT':
            return {
                ...state,
                content: action.content
            };
        default:
            return state;
    }
}

const initPostState = {
    post: {
        id: 0,
        ts: 0,
        forumID: 0,
        title: '',
        content: '',
        numResponses: 0
    },
    responsesRefreshing: false,
    responsesLastID: undefined,
    responses: [],
    responsesHasMore: true
};

export function post(state = initPostState, action) {
    switch (action.type) {
        case '@POST/SET_POST':
            return {
                ...state,
                post: action.post
            };
        case '@POST/START_LIST_RESPONSES':
            return {
                ...state,
                responsesRefreshing: true,
                responsesLastID: undefined
            };
        case '@POST/END_LIST_RESPONSES':
            if (!action.responses)
                return {
                    ...state,
                    responsesRefreshing: false
                };
            return {
                ...state,
                responsesRefreshing: false,
                responses: action.responses,
                responsesHasMore: action.responses.length > 0
            };
        case '@POST/START_LIST_MORE_RESPONSES':
            return {
                ...state,
                responsesLastID: action.start
            };
        case '@POST/END_LIST_MORE_RESPONSES':
            if (!action.responses)
                return state;
            return {
                ...state,
                responses: [...state.responses, ...action.responses],
                responsesHasMore: action.responses.length > 0
            };
        case '@POST/INSERT_RESPONSE':
            var newResponses = state.responses.slice();
            newResponses.unshift(action.response);
            return {
                ...state,
                responses: newResponses
            };
        case '@POST/UPDATE_POST':
            var newPost = state.post;
            newPost.numResponses = state.post.numResponses + 1;
            return {
                ...state,
                post: newPost
            };
        default:
            return state;
    }
}
