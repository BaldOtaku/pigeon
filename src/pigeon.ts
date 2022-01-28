import { PigeonInstance } from './types';
import Pigeon from './core/Pigeon';
import { extend } from './utils/common';

function createInstance(): PigeonInstance {
  const context = new Pigeon();
  const instance = Pigeon.prototype.request.bind(context);
  extend(instance, context);

  return instance as PigeonInstance;
}

const pigeon = createInstance();

export default pigeon;
