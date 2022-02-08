import Pigeon from './core/Pigeon';

function createInstance() {
  const context = new Pigeon();
  const instance = Pigeon.prototype.request.bind(context);

  for (const key in context) {
    (instance as any)[key] = (context as any)[key];
  }

  return instance;
}

const pigeon = createInstance();

export * from './types';

export default pigeon;
