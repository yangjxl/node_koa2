import { merge } from 'lodash';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const all = {
  context_path: 'node_koa2',
  elastic: {
    maxSockets: 20,
    requestTimeout: 120000,
    // performance_index: 'uosp_index_performance',
    performance_index: '',
    performance_type: '',
    business_index: '',
    business_type: '',
    efficiency_index: '',
    efficiency_type: ''
  },
  redis: {
    prefix: ''
  }
};

/* eslint-disable */
const config = merge(all, require(`./${process.env.NODE_ENV}`).default || {});
/* eslint-enable */

export default config;
