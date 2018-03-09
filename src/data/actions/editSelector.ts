import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

interface EditSelectorPayload {
    whoAmI: number,
    value: string
};

export interface EditSelector extends EditSelectorPayload {
    type: 'EDIT_SELECTOR'
};

function EditSelector(data: EditSelectorPayload): EditSelector {
    return {
        type: 'EDIT_SELECTOR',
        ...data
    };
}

export const editSelector$: Subject<EditSelectorPayload> = new Subject();

export const editSelectorAction$: Observable<EditSelector> = editSelector$.map(EditSelector);