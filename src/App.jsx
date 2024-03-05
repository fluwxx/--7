// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserForm from "./userFroms.jsx";
import UserDetails from "./UserDetails.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>User Information</h1>
                <UserForm />
                <UserDetails />
            </div>
        </Provider>
    );
};

export default App;
