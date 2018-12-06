import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotAndCold from './components/hot-and-cold';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HotAndCold />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
