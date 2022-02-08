import dispatchRequest from './dispatchRequest';
import InterceptorManager from './InterceptorManager';
import {
  PigeonRequestConfig,
  PigeonResponse,
  PigeonPromise,
  ResolvedFn,
  RejectedFn,
} from '../types';

interface Interceptors {
  request: InterceptorManager<PigeonRequestConfig>
  response: InterceptorManager<PigeonResponse>
}

interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: PigeonRequestConfig) => PigeonPromise)
  rejected?: RejectedFn
}

class Pigeon {
  interceptors: Interceptors = {
    request: new InterceptorManager<PigeonRequestConfig>(),
    response: new InterceptorManager<PigeonResponse>(),
  };

  request(config: PigeonRequestConfig) {
    const chain: PromiseChain<any>[] = [{
      resolved: dispatchRequest,
      rejected: undefined,
    }];

    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor);
    });

    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor);
    });

    let promise = Promise.resolve(config);

    while (chain.length) {
      const { resolved, rejected } = chain.shift()!;
      promise = promise.then(resolved, rejected);
    }

    return dispatchRequest(config);
  }
}

export default Pigeon;
