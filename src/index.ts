import { BuibuiRequestConfig } from './types';
import xhr from './xhr';

function buibui(config: BuibuiRequestConfig) {
  xhr(config);
}

export default buibui;
