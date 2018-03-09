import { Observable } from 'rxjs/Observable';

import { AddSelector, addSelectorAction$ } from './addSelector';
import { EditSelector, editSelectorAction$ } from './editSelector';
import { DeleteSelector, deleteSelectorAction$ } from './deleteSelector';

import 'rxjs/add/observable/merge';

// A union type for conveniently referencing the Actions that this application can make
export type Action
    = AddSelector
    | EditSelector
    | DeleteSelector

export const actions$ = Observable.merge(
    addSelectorAction$,
    editSelectorAction$,
    deleteSelectorAction$
);