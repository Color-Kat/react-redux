import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import { useSelector } from "react-redux";

function App() {
    let alert = useSelector(state => state.app.alert)
    return (
        <div className="app">
            {alert && <p>{alert}</p>}
            <div className="form">
                <PostForm />
            </div>
            <div className="content">
                <div className="posts">
                    <h2>Посты</h2>
                    <Posts />
                </div>
                <div className="fetched-posts">
                    <h2>Асинхронные посты</h2>
                    <FetchedPosts /> 
                </div>
            </div>
        </div>
    );
}

export default App;
