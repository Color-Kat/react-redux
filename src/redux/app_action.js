import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./posts_types"

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}

export function showAlert(msg) {
    return function (dispatch) {
        dispatch({type: SHOW_ALERT, payload: msg});
        dispatch(hideAlert())
    }
}

export function hideAlert() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({type: HIDE_ALERT});
        }, 2000);
    }
}