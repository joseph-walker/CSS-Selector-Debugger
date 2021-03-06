// An enumeration that defines the `type` of the possible action payloads
export enum ActionType {
    AddSelector = 'ADD_SELECTOR',
    EditSelector = 'EDIT_SELECTOR',
    DeleteSelector = 'DELETE_SELECTOR',
    SyncStateFromStorage = 'SYNC_STATE_FROM_STORAGE',
    ToggleExtensionEnabled = 'TOGGLE_EXTENSION_ENABLED',
    ToggleHideSelector = 'TOGGLE_HIDE_SELECTOR'
};