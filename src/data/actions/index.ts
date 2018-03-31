import { Observable } from 'rxjs/Observable';

import { AddSelector, addSelectorDispatcher$ } from './addSelector';
import { EditSelector, editSelectorDispatcher$ } from './editSelector';
import { DeleteSelector, deleteSelectorDispatcher$ } from './deleteSelector';
import { SyncStateFromStorage, syncStateFromStorageDispatcher$ } from './syncStateFromStorage'
import { ToggleExtensionEnabled, toggleExtensionEnabledDispatcher$ } from './toggleExtensionEnabled';
import { ToggleHideSelector, toggleHideSelectorDispatcher$ } from './toggleHideSelector';

import 'rxjs/add/observable/merge';

// A union type for conveniently referencing the Actions that this application can make
export type Action
    = AddSelector
    | EditSelector
    | DeleteSelector
    | SyncStateFromStorage
    | ToggleExtensionEnabled
    | ToggleHideSelector

export const actions$ = Observable.merge(
    addSelectorDispatcher$,
    editSelectorDispatcher$,
    deleteSelectorDispatcher$,
    syncStateFromStorageDispatcher$,
    toggleExtensionEnabledDispatcher$,
    toggleHideSelectorDispatcher$
);