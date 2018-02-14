import { ActionCreator } from 'redux';

import { ActionType, EditSelectorRecord } from './actionTypes';

export type EditSelectorActionCreator = ActionCreator<EditSelectorRecord>

export const editSelector: ActionCreator<EditSelectorRecord> = function(whoAmI: number, value: string): EditSelectorRecord {
    return {
        type: ActionType.EditSelector,
        whoAmI,
        value
    };
};
