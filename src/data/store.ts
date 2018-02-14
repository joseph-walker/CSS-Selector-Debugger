import * as R from 'ramda';
import { createStore } from 'redux';

import { Action, ActionType } from './actions/actionTypes';
import { addSelector } from './actions/addSelector';

export interface CssSelector {
    selectorString: string
};

const emptySelector = {
    selectorString: ''
};

export interface Model {
    selectors: CssSelector[]
};

const emptyModel: Model = {
    selectors: []
};

const LSelectors = R.lensProp('selectors');

function reducer(state: Model = emptyModel, action: Action): Model {
    switch(action.type) {
        case ActionType.AddSelector: {
            return R.over(LSelectors, R.append(emptySelector), state);
        }
        case ActionType.EditSelector: {
            const index = <R.Lens>R.compose(LSelectors, R.lensIndex(action.whoAmI));

            return R.set(index, action.value, state);
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(reducer);