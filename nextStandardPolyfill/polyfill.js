import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import '@rauschma/iterator-helpers-polyfill/install';

import "./proposal-arraybuffer-base64/polyfill-install.js";

globalThis.Temporal = Temporal;
Date.prototype.toTemporalInstant = toTemporalInstant;