import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { state$ } from './data/state';
import { saveState, stateFromStorage$ } from './data/storage';
import { Model } from './data/appModel';
import App from './containers/App';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/multicast';

// Because we subscribe to appState$ in two places (one debounced),
// we have to multicast our stream. Otherwise appState$ side effects (like getting state from storage)
// will run twice -- once for each subscription.
const multicast$ = state$
    .multicast(new Subject());

multicast$
    .subscribe(function(state: Model) {
        const app = (
            <App selectors={state.selectors} configuration={state.appConfiguration} />
        );

        // Render the React app
        render(app, document.getElementById('app'));

        // Send a message to the Event Page to render the new state
        chrome.runtime.sendMessage(state);
    });

// Store the state to Chrome Local Storage
multicast$
    .debounceTime(100)
    .subscribe(saveState);

multicast$.connect();