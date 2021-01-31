import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {fetch_post} from '../redux/post_action';
import Loader from './Loader';
import Post from './Post';

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);

    const loading = useSelector(state => state.app.loading);
    

    if(!posts.length) {return (
        <button 
            onClick={()=>dispatch(fetch_post())}
        >Загрузить</button>
    )}
 
    if (loading) {
        return (<Loader/>);
    }
    
    return posts.map(post => <Post key={post.id} post={post} />)
} 

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         posts: state.posts.fetchedPosts
//     }
// }

export default FetchedPosts;