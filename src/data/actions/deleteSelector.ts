import { ActionType } from './actionTypes';
import { createAction } from './../util/createAction';

export interface DeleteSelectorPayload {
    whoAmI: number
};

export interface DeleteSelector extends DeleteSelectorPayload {
    type: ActionType.DeleteSelector
};

export const {
    invoker$: deleteSelector$,
    dispatcher$: deleteSelectorDispatcher$
} = createAction<DeleteSelectorPayload, ActionType.DeleteSelector>(ActionType.DeleteSelector);