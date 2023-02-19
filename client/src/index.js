import React from "react";

import {createRoot} from "react-dom/client"

import { Provider } from "react-redux";

import { BrowserRouter} from 'react-router-dom'

import App from './App';

import store from './store';

const ele = document.getElementById('root');

const root = createRoot(ele);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);