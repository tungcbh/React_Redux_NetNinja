const initState = {
    posts: [
        { id: '1', title: 'aaaa', body: 'love you' },
        { id: '2', title: 'bbbb', body: 'love you so much' },
        { id: '3', title: 'cccc', body: 'love you' },
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;