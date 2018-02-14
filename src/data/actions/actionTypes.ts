import { Action as ReduxAction } from 'redux';

// An enumeration that defines the `type` of the Redux action payload
export enum ActionType {
    AddSelector = 'ADD_SELECTOR',
    EditSelector = 'EDIT_SELECTOR'
};

// Interfaces that define action payload bodies
export interface AddSelectorRecord extends ReduxAction {
    type: ActionType.AddSelector
};

export interface EditSelectorRecord extends ReduxAction {
    type: ActionType.EditSelector,
    whoAmI: number,
    value: string
};

// A union type for conveniently referencing the Actions that this application can make
export type Action
    = AddSelectorRecord
    | EditSelectorRecord