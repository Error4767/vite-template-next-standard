import "./atomic-wait-async.js";
import { Temporal, toTemporalInstant  } from '@js-temporal/polyfill';
import  "core-js/actual/array/group-by";
import "./proposal-change-array-by-copy.js";
import fromAsync from "array-from-async";

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;
Array.fromAsync = fromAsync;