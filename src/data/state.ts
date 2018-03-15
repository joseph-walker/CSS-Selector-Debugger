import { actions$ } from './actions';
import { update } from './update';
import { emptyModel } from './appModel';

import 'rxjs/add/operator/scan';

export const state$ = actions$
    .scan(update, emptyModel);