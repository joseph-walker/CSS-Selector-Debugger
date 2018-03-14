import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';
import { typeConstructor } from './../util/typeConstructor';

import 'rxjs/add/operator/map';

export interface DeleteSelectorPayload {
    whoAmI: number
};

export interface DeleteSelector extends DeleteSelectorPayload {
    type: ActionType.DeleteSelector
};

export const deleteSelector$: Subject<DeleteSelectorPayload> = new Subject();

export const deleteSelectorAction$: Observable<DeleteSelector> = deleteSelector$
    .map(typeConstructor<ActionType.DeleteSelector, DeleteSelectorPayload>(ActionType.DeleteSelector));