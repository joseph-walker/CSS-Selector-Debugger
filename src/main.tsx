import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { state } from './data/state';
import { Model } from './data/Model';
import App from './containers/App';
import drawSelectors from './drawSelectors';

state.subscribe(function(state: Model) {
    const app = (
        <App selectors={state.selectors} />
    );

    drawSelectors(state.selectors);
    render(app, document.getElementById('app'));
});