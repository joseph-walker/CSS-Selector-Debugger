import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './data/store';
import App from './containers/App';
import drawSelectors from './drawSelectors';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

store.subscribe(drawSelectors);

// Run
render(app, document.getElementById('app'));
drawSelectors();
