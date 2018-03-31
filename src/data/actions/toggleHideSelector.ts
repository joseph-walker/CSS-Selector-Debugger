import { ActionType } from './actionTypes';
import { createAction } from './../util/createAction';

export interface ToggleHideSelectorPayload {
    whoAmI: number
};

export interface ToggleHideSelector extends ToggleHideSelectorPayload {
    type: ActionType.ToggleHideSelector
};

export const {
    invoker$: toggleHideSelector$,
    dispatcher$: toggleHideSelectorDispatcher$
} = createAction<ToggleHideSelectorPayload, ActionType.ToggleHideSelector>(ActionType.ToggleHideSelector);