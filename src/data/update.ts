import * as R from 'ramda';

import { Model, CssSelector, emptySelector } from './appModel';
import { Action } from './actions';
import { ActionType } from './actions/actionTypes';

const LSelectors = R.lensProp('selectors');
const LConfiguration = R.lensProp('appConfiguration');

export function update(state: Model, action: Action): Model {
    switch(action.type) {
        case ActionType.AddSelector: {
            return R.over(LSelectors, R.append(emptySelector), state);
        }
        case ActionType.EditSelector: {
            const index = <R.Lens>R.compose(
                LSelectors,
                R.lensIndex(action.whoAmI),
                R.lensProp('selectorString')
            );

            return R.set(index, action.value, state);
        }
        case ActionType.DeleteSelector: {
            return R.over(LSelectors, R.remove(action.whoAmI, 1), state);
        }
        case ActionType.SyncStateFromStorage: {
            return action.newState;
        }
        case ActionType.ToggleExtensionEnabled: {
            const enabled = <R.Lens>R.compose(
                LConfiguration,
                R.lensProp('enabled')
            );

            const flop = (b: boolean) => !b;

            return R.over(enabled, flop, state);
        }
        default: {
            return state;
        }
    }
}