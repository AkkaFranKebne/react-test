import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//dodaje parametry
ReactDOM.render(<App name="Wojtek" trener={true} />, document.getElementById('root'));
registerServiceWorker();