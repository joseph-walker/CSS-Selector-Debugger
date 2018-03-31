import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Model } from './../appModel';
import { ActionType } from './actionTypes';
import { stateFromStorage$ } from './../storage';

export interface SyncStateFromStorage {
    type: ActionType.SyncStateFromStorage,
    newState: Model
};

export const syncStateFromStorageDispatcher$ = stateFromStorage$.map(function(state: Model): SyncStateFromStorage {
    return {
        type: ActionType.SyncStateFromStorage,
        newState: state
    };
})