import { PigeonInstance } from './types';
import Pigeon from './core/Pigeon';

function createInstance() {
  const context: PigeonInstance = new Pigeon();
  const instance: PigeonInstance = Pigeon.prototype.request.bind(context);

  for (const key in context) {
    instance[key] = context[key];
  }

  return instance;
}

const pigeon = createInstance();

export * from './types';

export default pigeon;
