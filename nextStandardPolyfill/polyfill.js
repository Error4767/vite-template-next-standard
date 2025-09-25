import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import '@rauschma/iterator-helpers-polyfill/install';

import "./proposalUpsert.js";

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;