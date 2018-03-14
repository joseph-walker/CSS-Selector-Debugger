import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';
import { typeConstructor } from './../util/typeConstructor';

import 'rxjs/add/operator/map';

export interface EditSelectorPayload {
    whoAmI: number,
    value: string
};

export interface EditSelector extends EditSelectorPayload {
    type: ActionType.EditSelector
};

export const editSelector$: Subject<EditSelectorPayload> = new Subject();

export const editSelectorAction$: Observable<EditSelector> = editSelector$
    .map(typeConstructor<ActionType.EditSelector, EditSelectorPayload>(ActionType.EditSelector));