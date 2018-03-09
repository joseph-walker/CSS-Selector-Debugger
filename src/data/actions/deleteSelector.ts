import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';

import 'rxjs/add/operator/map';

interface DeleteSelectorPayload {
    whoAmI: number
};

export interface DeleteSelector extends DeleteSelectorPayload {
    type: ActionType.DeleteSelector
};

function DeleteSelector(data: DeleteSelectorPayload): DeleteSelector {
    return {
        type: ActionType.DeleteSelector,
        ...data
    };
}

export const deleteSelector$: Subject<DeleteSelectorPayload> = new Subject();

export const deleteSelectorAction$: Observable<DeleteSelector> = deleteSelector$.map(DeleteSelector);