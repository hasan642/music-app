/**
 * name: instance.ts
 * desc: the axios instance should be decalred here.
 */

import axios from 'axios';
import { SHARED_VARIABLES } from 'config';

/**
 * declare the instance.
 */
const instance = axios.create({
    baseURL: 'https://api.happi.dev/v1',
    params: {}
});

/**
 * add a request interceptor.
 */
instance.interceptors.request.use(async config => {

    /**
     * add 'HAPPI_API_KEY' to request params.
     */
    config.params['apikey'] = SHARED_VARIABLES.HAPPI_API_KEY;

    return config;
});

/**
 * export instance as default.
 */
export default instance;