import { ActionType } from './actionTypes';
import { createAction } from './../util/createAction';

export interface EditSelectorPayload {
    whoAmI: number,
    value: string
};

export interface EditSelector extends EditSelectorPayload {
    type: ActionType.EditSelector
};

export const {
    invoker$: editSelector$,
    dispatcher$: editSelectorDispatcher$
} = createAction<EditSelectorPayload, ActionType.EditSelector>(ActionType.EditSelector);