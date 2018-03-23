import { Observable } from 'rxjs/Observable';

import { Model, isValidModel, emptyModel } from './appModel';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

interface StoredState {
    state: Model
}

export const stateFromStorage$ = new Observable<Model>(function subscribe(observer) {
    console.log("Getting State...");

    chrome.storage.local.get('state', function({ state }: StoredState) {
        console.log(isValidModel(state));

        if (isValidModel(state)) {
            observer.next(state);
        }
        else {
            console.error('Found Problem with State');
            observer.error();
        }

        observer.complete();
    });
}).catch(function(err) {
    return Observable.of(emptyModel);
});

export function saveState(state: Model) {
    chrome.storage.local.set({ state: state });
}