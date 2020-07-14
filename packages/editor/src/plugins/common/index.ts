import { keymaps, keymapInfo } from './keymaps';
import { plugin } from './plugin';
import { schema } from './schema';
import { styleFunction } from './styles';

export default {
  name: 'common',
  keymaps,
  keymapInfo,
  plugin,
  schema,
  styles: styleFunction,
};
