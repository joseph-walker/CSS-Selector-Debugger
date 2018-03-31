import { over, set, append, remove, lensIndex, lensProp, compose, Lens as RamdaLens } from 'ramda';

import { Model, CssSelector, emptySelector } from './appModel';
import { Action } from './actions';
import { ActionType } from './actions/actionTypes';

const LSelectors = lensProp('selectors');
const LConfiguration = lensProp('appConfiguration');

export function update(state: Model, action: Action): Model {
    switch(action.type) {
        case ActionType.AddSelector: {
            return over(LSelectors, append(emptySelector), state);
        }
        case ActionType.EditSelector: {
            const index = <RamdaLens>compose(
                LSelectors,
                lensIndex(action.whoAmI),
                lensProp('selectorString')
            );

            return set(index, action.value, state);
        }
        case ActionType.DeleteSelector: {
            return over(LSelectors, remove(action.whoAmI, 1), state);
        }
        case ActionType.SyncStateFromStorage: {
            return action.newState;
        }
        case ActionType.ToggleExtensionEnabled: {
            const enabled = <RamdaLens>compose(
                LConfiguration,
                lensProp('enabled')
            );

            const flop = (b: boolean) => !b;

            return over(enabled, flop, state);
        }
        case ActionType.ToggleHideSelector: {

        }
        default: {
            return state;
        }
    }
}