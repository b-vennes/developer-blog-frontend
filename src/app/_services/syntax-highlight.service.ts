import { Injectable } from '@angular/core';

import 'clipboard';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components';

declare var Prism: any;

@Injectable()
export class SyntaxHighlightService {
  highlightAll() {
    Prism.highlightAll();
  }
}
