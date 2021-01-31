import { act } from "react-dom/test-utils";
import { showAlert } from "./app_action";
import { CREATE_POST } from "./posts_types"

const forbiddenWords = ['fuck', 'spam', 'duck'];

export function forbiddenWordsMidleware({dispatch}) {
    return function(next) {
        return function (action) {
            if(action.type === CREATE_POST) {
                const found = forbiddenWords.filter(w => action.payload.title.includes(w));
                if (found.length) {
                    dispatch(showAlert('Запрещенное слово ая-яй'));
                    return;
                }
            }
            return next(action);
        }
    }
}