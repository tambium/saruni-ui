import { keymaps, keymapInfo } from './keymaps';
import { plugin } from './plugin';
import { schema } from './schema';
import { styleFunction } from './styles';
import { ToolbarComponent } from './ToolbarComponent';

export default {
  name: 'inline',
  keymapInfo,
  keymaps,
  plugin,
  schema,
  styles: styleFunction,
  toolbarComponent: ToolbarComponent,
};
