import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ActionType } from './../actions/actionTypes';
import { typeConstructor } from './typeConstructor';

import 'rxjs/add/operator/map';

export function createAction<P extends object, T>(type: T) {
    const invoker$: Subject<P> = new Subject();

    const dispatcher$: Observable<P & { type: T }> = invoker$
        .map(typeConstructor<T, P>(type));

    return {
        invoker$,
        dispatcher$
    };
}