import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import '@rauschma/iterator-helpers-polyfill/install';

import "./proposal-arraybuffer-base64/polyfill-install.js";

import promiseTry from "promise.try";
promiseTry.shim();

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;