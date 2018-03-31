import { ActionType } from './actionTypes';
import { createAction } from './../util/createAction';

export interface AddSelectorPayload {
    whoAmI: number
};

export interface AddSelector extends AddSelectorPayload {
    type: ActionType.AddSelector
};

export const {
    invoker$: addSelector$,
    dispatcher$: addSelectorDispatcher$
} = createAction<AddSelectorPayload, ActionType.AddSelector>(ActionType.AddSelector);