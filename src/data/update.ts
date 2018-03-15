import * as R from 'ramda';

import { Model, CssSelector, emptySelector } from './appModel';
import { Action } from './actions';
import { ActionType } from './actions/actionTypes';

const LSelectors = R.lensProp('selectors');

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
        default: {
            return state;
        }
    }
}