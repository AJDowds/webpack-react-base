import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const title = 'Webpack React Base';
 
ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);