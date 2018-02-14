import { ActionCreator } from 'redux';

import { ActionType, AddSelectorRecord } from './actionTypes';

export type AddSelectorActionCreator = ActionCreator<AddSelectorRecord>

export const addSelector: ActionCreator<AddSelectorRecord> = function(): AddSelectorRecord {
    return {
        type: ActionType.AddSelector
    };
};
