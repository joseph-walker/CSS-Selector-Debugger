import { Observable } from 'rxjs/Observable';

import { Model, isValidModel } from './appModel';

interface StoredState {
    state: Model
}

export const stateFromStorage$ = new Observable<Model>(function subscribe(observer) {
    chrome.storage.local.get('state', function({ state }: StoredState) {
        if (isValidModel(state)) {
            console.log('Got State...', state);
            observer.next(state);
        }

        observer.complete();
    });
});

export function saveState(state: Model) {
    console.log('Saving State...', state);
    chrome.storage.local.set({ state: state });
}