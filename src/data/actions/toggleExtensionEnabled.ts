import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './actionTypes';
import { typeConstructor } from './../util/typeConstructor';

import 'rxjs/add/operator/map';

export interface ToggleExtensionEnabledPayload {
    //
};

export interface ToggleExtensionEnabled extends ToggleExtensionEnabledPayload {
    type: ActionType.ToggleExtensionEnabled
};

export const toggleExtensionEnabled$: Subject<ToggleExtensionEnabledPayload> = new Subject();

export const toggleExtensionEnabledAction$: Observable<ToggleExtensionEnabled> = toggleExtensionEnabled$
    .map(typeConstructor<ActionType.ToggleExtensionEnabled, ToggleExtensionEnabledPayload>(ActionType.ToggleExtensionEnabled));