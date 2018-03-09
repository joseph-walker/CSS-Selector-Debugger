import { actions$ } from './actions';
import { update } from './update';
import { emptyModel } from './model';

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

export const state = actions$
    .scan(update, emptyModel)
    .startWith(emptyModel);