import "./atomic-wait-async.js";
import "./accessible-object-hasownproperty.js";
import { Temporal, toTemporalInstant  } from '@js-temporal/polyfill';
import  "core-js/actual/array/group-by";
import "./proposal-change-array-by-copy.js";

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;