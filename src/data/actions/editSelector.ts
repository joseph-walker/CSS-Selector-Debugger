import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';

import 'rxjs/add/operator/map';

interface EditSelectorPayload {
    whoAmI: number,
    value: string
};

export interface EditSelector extends EditSelectorPayload {
    type: ActionType.EditSelector
};

function EditSelector(data: EditSelectorPayload): EditSelector {
    return {
        type: ActionType.EditSelector,
        ...data
    };
}

export const editSelector$: Subject<EditSelectorPayload> = new Subject();

export const editSelectorAction$: Observable<EditSelector> = editSelector$.map(EditSelector);