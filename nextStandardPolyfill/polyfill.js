import { Temporal, toTemporalInstant  } from '@js-temporal/polyfill';
import  "core-js/actual/array/group-by";
import '@rauschma/set-methods-polyfill/install';
import '@rauschma/iterator-helpers-polyfill/install';
import isWellFormed from 'string.prototype.iswellformed';
import toWellFormed  from 'string.prototype.towellformed';

import "./promise-with-resolvers";

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;
globalThis.isWellFormed = isWellFormed;
globalThis.toWellFormed = toWellFormed;