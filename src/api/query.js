// Develop server URL
const baseUrl = 'http://nthustraydog.us-west-2.elasticbeanstalk.com/api';

//AWS
// const baseUrl = 'http://nthustraydog.us-west-2.elasticbeanstalk.com/api';

export function getForum(forumID, start) {
    let url = `${baseUrl}/forum/posts`;
    let query = [];
    query.push(`forumID=${forumID}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}

export function getResponses(postID, start) {
    let url = `${baseUrl}/forum/responses`;
    let query = [];
    query.push(`postID=${postID}`);
    if (start)
        query.push(`start=${start}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        console.log('get')
        return res.json();
    });
}

export function createPost(forumID, title, content) {
    const url = `${baseUrl}/forum/post`;

    console.log(`Making POST request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            forumID,
            title,
            content
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.json();
    });
}

export function createResponse(postID, content) {
    const url = `${baseUrl}/forum/response`;

    console.log(`Making POST request to: ${url}`);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postID,
            content
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.json();
    });
}

// export function listPosts(searchText = '', start) {
//     let url = `${postBaseUrl}/posts`;
//     let query = [];
//     if (searchText)
//         query.push(`searchText=${searchText}`);
//     if (start)
//         query.push(`start=${start}`);
//     if (query.length)
//         url += '?' + query.join('&');
//
//     console.log(`Making GET request to: ${url}`);
//
//     return fetch(url, {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(res => {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.json();
//     });
// }
//
// export function createPost(mood, text) {
//     let url = `${postBaseUrl}/posts`;
//
//     console.log(`Making POST request to: ${url}`);
//
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             mood,
//             text
//         })
//     }).then(function(res) {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.json();
//     });
// }
//
// export function createVote(id, mood) {
//     let url = `${postBaseUrl}/posts/${id}/${mood.toLowerCase()}Votes`;
//
//     console.log(`Making POST request to: ${url}`);
//
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(function(res) {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.json();
//     });
// }
