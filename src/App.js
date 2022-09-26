import "./App.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./store/reducer";
import MainArea from "./screens/mainArea/mainArea";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <MainArea />
        </Provider>
    );
}

export default App;
