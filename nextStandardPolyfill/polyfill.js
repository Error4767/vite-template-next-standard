import "./atomic-wait-async.js";
import { Temporal, toTemporalInstant  } from '@js-temporal/polyfill';
import  "core-js/actual/array/group-by";
import "./proposal-change-array-by-copy.js";
import fromAsync from "array-from-async";
import '@rauschma/set-methods-polyfill/install';
import '@rauschma/iterator-helpers-polyfill/install';
import isWellFormed from 'string.prototype.iswellformed';
import toWellFormed  from 'string.prototype.towellformed';

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;
Array.fromAsync = fromAsync;
globalThis.isWellFormed = isWellFormed;
globalThis.toWellFormed = toWellFormed;