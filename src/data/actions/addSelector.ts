import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';
import { typeConstructor } from './../util/typeConstructor';

import 'rxjs/add/operator/map';

export interface AddSelectorPayload {
    //
};

export interface AddSelector extends AddSelectorPayload {
    type: ActionType.AddSelector
};

export const addSelector$: Subject<AddSelectorPayload> = new Subject();

export const addSelectorAction$: Observable<AddSelector> = addSelector$
    .map(typeConstructor<ActionType.AddSelector, AddSelectorPayload>(ActionType.AddSelector));