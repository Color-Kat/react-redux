import { hideAlert, hideLoader, showAlert, showLoader } from "./app_action";
import { CREATE_POST, FETCH_POSTS, REQUEST_POSTS } from "./posts_types";

export function create_post(post) {
    console.log(post);
    // if (post)
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetch_post() {
    return {
        type: REQUEST_POSTS
    }
    // return async function (dispatch) {
    //     try {
    //         dispatch(showLoader()); 
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    //         const json = await response.json();

    //         dispatch({type: FETCH_POSTS, payload: json});
    //         dispatch(hideLoader());
    //     }catch (e) {
    //         dispatch(showAlert('Что-то пошло не так'));
    //         dispatch(hideAlert());
    //     }
    // }
}