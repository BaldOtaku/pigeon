import { ResolvedFn, RejectedFn } from '../types';

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null> = [];

  use(resolved: ResolvedFn<T>, rejected?: RejectedFn) {
    this.interceptors.push({
      resolved,
      rejected,
    });

    return this.interceptors.length - 1;
  }

  eject(id: number) {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }

  forEach(fn: (interceptor: Interceptor<T>) => void) {
    this.interceptors.forEach((interceptor) => {
      if (interceptor !== null) {
        fn(interceptor);
      }
    });
  }
}

export default InterceptorManager;
