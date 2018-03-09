import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';

import 'rxjs/add/operator/map';

interface AddSelectorPayload {
    //
};

export interface AddSelector extends AddSelectorPayload {
    type: ActionType.AddSelector
};

function AddSelector(data: AddSelectorPayload): AddSelector {
    return {
        type: ActionType.AddSelector
    };
}

export const addSelector$: Subject<AddSelectorPayload> = new Subject();

export const addSelectorAction$: Observable<AddSelector> = addSelector$.map(AddSelector);