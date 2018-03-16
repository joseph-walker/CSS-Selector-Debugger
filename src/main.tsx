import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { state$ } from './data/state';
import { saveState, stateFromStorage$ } from './data/storage';
import { emptyModel, Model } from './data/appModel';
import App from './containers/App';
import drawSelectors from './drawSelectors';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/multicast';

// Because we subscribe to appState$ in two places (one debounced),
// we have to multicast our stream. Otherwise appState$ side effects (like getting state from storage)
// will run twice -- once for each subscription.
const multicast$ = state$
    .startWith(emptyModel)
    .multicast(new Subject());

multicast$
    .subscribe(function(state: Model) {
        const app = (
            <App selectors={state.selectors} />
        );

        drawSelectors(state.selectors);
        render(app, document.getElementById('app'));
    });

// Store the state to Chrome Local Storage
multicast$
    .debounceTime(100)
    .subscribe(saveState);

multicast$.connect();