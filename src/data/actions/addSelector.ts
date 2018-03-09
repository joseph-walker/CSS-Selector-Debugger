import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

interface AddSelectorPayload {
    //
};

export interface AddSelector extends AddSelectorPayload {
    type: 'ADD_SELECTOR'
};

function AddSelector(data: AddSelectorPayload): AddSelector {
    return {
        type: 'ADD_SELECTOR'
    };
}

export const addSelector$: Subject<AddSelectorPayload> = new Subject();

export const addSelectorAction$: Observable<AddSelector> = addSelector$.map(AddSelector);