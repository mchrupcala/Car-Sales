import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');

//Be sure to use my REDUCER here, not inital state.
const store = createStore(reducer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);