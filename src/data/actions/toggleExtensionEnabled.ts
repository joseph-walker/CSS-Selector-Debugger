import { ActionType } from './actionTypes';
import { createAction } from './../util/createAction';

export interface ToggleExtensionEnabledPayload {
    //
};

export interface ToggleExtensionEnabled extends ToggleExtensionEnabledPayload {
    type: ActionType.ToggleExtensionEnabled
};

export const {
    invoker$: toggleExtensionEnabled$,
    dispatcher$: toggleExtensionEnabledDispatcher$
} = createAction<ToggleExtensionEnabledPayload, ActionType.ToggleExtensionEnabled>(ActionType.ToggleExtensionEnabled);